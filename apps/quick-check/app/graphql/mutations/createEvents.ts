import { logError, Variant } from "quickcheck-shared";

import {
  getEventStreamName,
  graphql,
  type Event_Insert_Input,
  type EventInput,
  type GQLProxyAllData,
  type GraphQLClient,
} from "~/graphql";

import { capturePosthogEvents } from "~/utils/posthog";

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
  this: GraphQLClient,
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
    const { data } = await this.mutate({
      mutation: CREATE_EVENTS,
      variables: { events },
    });

    await capturePosthogEvents(
      events.map((event) => ({
        distinctId: userId,
        event: event.type,
        properties: { ...event.data, subdomain: tenantId },
      })),
    );

    if (!data?.insert_event?.returning) return null;

    return data.insert_event.returning;
  } catch (error) {
    logError({ error, log: "createEvent" });
    return null;
  }
}
