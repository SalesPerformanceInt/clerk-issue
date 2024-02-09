import { logError, Variant } from "quickcheck-shared";

import {
  getEventStreamName,
  graphql,
  type Event_Insert_Input,
  type EventInput,
  type GQLProxyAllData,
  type WithApolloClient,
} from "~/graphql";

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

  const events: Event_Insert_Input[] = inputs.map((input) => ({
    ...input,
    stream_name,
  }));

  try {
    const { data } = await this.client.mutate({
      mutation: CREATE_EVENTS,
      variables: { events },
    });

    if (!data?.insert_event) return null;

    return data.insert_event;
  } catch (error) {
    logError({ error, log: "createEvent" });
    return null;
  }
}
