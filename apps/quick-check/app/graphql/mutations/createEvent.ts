import { logError, Variant } from "quickcheck-shared";

import {
  graphql,
  type Event_Insert_Input,
  type GQLProxyAllData,
  type GraphQLClient,
} from "~/graphql";

import { Template } from "~/utils/email/emailTemplatesMap";
import { capturePosthogEvent } from "~/utils/posthog";

export type Events = {
  EnrollmentAdded: {
    enrollment_id: string;
    user_id: string;
    taxonomy_id: string;
  };
  EnrollmentUpdated: {
    enrollment_id: string;
    user_id: string;
    taxonomy_id: string;
    previous_expiration_date: string | null;
    new_expiration_date: string | null;
  };
  EnrollmentReset: {
    enrollment_id: string;
    user_id: string;
    taxonomy_id: string;
    previous_start_date: string;
    new_start_date: string;
    previous_expiration_date: string | null;
    new_expiration_date: string | null;
  };
  EnrollmentDeleted: {
    enrollment_id: string;
    user_id: string;
    taxonomy_id: string;
  };
  EnrollmentRejected: Events["EnrollmentDeleted"];
  EnrollmentIgnored: Events["EnrollmentDeleted"];
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
  EnrollmentCompleted: {
    enrollment_id: string;
    taxonomy_id: string;
    score: number;
    rank: number;
  };
};

export type EventInput<
  EventsData = Events,
  EventKey extends keyof EventsData = keyof EventsData,
> = EventKey extends any
  ? keyof EventsData[EventKey] extends never
    ? { type: EventKey }
    : {
        type: EventKey;
        data: EventsData[EventKey];
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
  this: GraphQLClient,
  input: EventInput,
  proxyData: GQLProxyAllData,
) {
  const { userId, tenantId } = proxyData;

  const event = {
    ...input,
    stream_name: getEventStreamName(userId, tenantId),
  } satisfies Event_Insert_Input;

  try {
    const result = await this.mutate({
      mutation: CREATE_EVENT,
      variables: { event },
    });

    await capturePosthogEvent({
      distinctId: userId,
      event: event.type,
      properties: { ...event.data, subdomain: tenantId },
    });

    if (!result.data?.insert_event_one) return null;

    return result.data.insert_event_one;
  } catch (error) {
    logError({ error, log: "createEvent" });
    return null;
  }
}
