import { parsePhoneNumber } from "libphonenumber-js";
import { isEmpty } from "lodash";

import {
  graphql,
  type GQLProxyData,
  type User_Insert_Input,
  type WithApolloClient,
} from "~/graphql";

import { generateNewToken } from "./generateNewToken";

export const UPSERT_USER = graphql(/* GraphQL */ `
  mutation UpsertUser($user: user_insert_input!) {
    insert_user_one(
      object: $user
      on_conflict: {
        constraint: users_pkey
        update_columns: [
          email
          first_name
          last_name
          language_preference
          phone_number
          timezone
        ]
      }
    ) {
      ...UserWithActiveToken
    }
  }
`);

export async function upsertUser(
  this: WithApolloClient,
  user: User_Insert_Input,
  proxyData: GQLProxyData,
) {
  const { now } = proxyData;

  try {
    const { data } = await this.client.mutate({
      mutation: UPSERT_USER,
      variables: { user },
    });

    const userId = data?.insert_user_one?.user_id;

    if (userId && isEmpty(data.insert_user_one?.active_tokens))
      generateNewToken.call(this, { userId, now });

    return data?.insert_user_one ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
