import { logError, Variant } from "quickcheck-shared";

import {
  getEventStreamName,
  graphql,
  type Event_Insert_Input,
  type EventInput,
  type GQLProxyAllData,
  type WithApolloClient,
} from "~/graphql";

import { posthog } from "~/utils/posthog";

export const CREATE_EVENTS = graphql(/* GraphQL */ `
  mutation CreateEvents($events: [event_insert_input!]!) {
    insert_event(objects: $events) {
      returning {
        ...BaseEvent
      }
    }
  }
`);

export async function createEvents(
  this: WithApolloClient,
  inputs: EventInput[],
  proxyData: GQLProxyAllData,
) {
  const { userId, tenantId } = proxyData;

  const stream_name = getEventStreamName(userId, tenantId);

  const events = inputs.map((input) => ({
    ...input,
    stream_name,
  })) satisfies Event_Insert_Input[];

  try {
    const { data } = await this.client.mutate({
      mutation: CREATE_EVENTS,
      variables: { events },
    });

    for (const event of events) {
      posthog.capture({
        distinctId: userId,
        event: event.type,
        properties: { ...event.data, subdomain: tenantId },
      });
    }
    await posthog.flushAsync();

    if (!data?.insert_event?.returning) return null;

    return data.insert_event.returning;
  } catch (error) {
    logError({ error, log: "createEvent" });
    return null;
  }
}
