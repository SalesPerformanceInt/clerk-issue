import { logError, Variant } from "quickcheck-shared";

import {
  graphql,
  type Event_Insert_Input,
  type GQLProxyAllData,
  type WithApolloClient,
} from "~/graphql";

import { Template } from "~/utils/email/emailTemplatesMap";
import { posthog } from "~/utils/posthog";

type Events = {
  EnrollmentAdded: {
    enrollment_id: string;
    taxonomy_id: string;
  };
  NotificationSent: {
    enrollment_id?: string;
    message: string;
    channel: "email";
    template: Template;
    token: string;
  };
  Authenticated: {
    token: string;
  };
  QuestionViewed: {
    enrollment_id: string;
    question_id: string;
    taxonomy_id: string;
    variant: Variant;
  };
  QuestionAnswered: {
    enrollment_id: string;
    question_id: string;
    taxonomy_id: string;
    variant: Variant;
    choices: string[];
    points: number;
    correct: boolean;
    attempt: number;
  };
  QuestionRetired: {
    enrollment_id: string;
    question_id: string;
    taxonomy_id: string;
    attempts: number;
  };
  QuestionScheduled: {
    enrollment_id: string;
    question_id: string;
    taxonomy_id: string;
    attempts: number;
    scheduled: string;
  };
  EnrollmentScored: {
    enrollment_id: string;
    question_id: string;
    points: number;
    score: number;
    rank: number;
  };
};

export type EventInput<T extends keyof Events = keyof Events> = T extends any
  ? {
      type: T;
      data: Events[T];
    }
  : never;

export const CREATE_EVENT = graphql(/* GraphQL */ `
  mutation CreateEvent($event: event_insert_input!) {
    insert_event_one(object: $event) {
      ...BaseEvent
    }
  }
`);

export const getEventStreamName = (userId: string, tenantId: string) =>
  `qc:user:${tenantId}:${userId}`;

export async function createEvent(
  this: WithApolloClient,
  input: EventInput,
  proxyData: GQLProxyAllData,
) {
  const { userId, tenantId } = proxyData;

  const event = {
    ...input,
    stream_name: getEventStreamName(userId, tenantId),
  } satisfies Event_Insert_Input;

  try {
    const { data } = await this.client.mutate({
      mutation: CREATE_EVENT,
      variables: { event },
    });

    posthog.capture({
      distinctId: userId,
      event: event.type,
      properties: { ...event.data, subdomain: tenantId },
    });
    await posthog.flushAsync();

    if (!data?.insert_event_one) return null;

    return data.insert_event_one;
  } catch (error) {
    logError({ error, log: "createEvent" });
    return null;
  }
}
