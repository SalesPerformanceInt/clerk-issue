import { isEmpty } from "lodash";
import invariant from "tiny-invariant";

import { RequiredKeys } from "quickcheck-shared";

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

export type UpsertUserInput = RequiredKeys<
  User_Insert_Input,
  "user_id" | "tenant_id" | "first_name" | "last_name" | "email"
>;

export async function upsertUser(
  this: WithApolloClient,
  user: UpsertUserInput,
  proxyData: GQLProxyData,
) {
  const { now } = proxyData;

  try {
    const result = await this.client.mutate({
      mutation: UPSERT_USER,
      variables: { user },
    });

    const { data } = result;

    const userId = data?.insert_user_one?.user_id;
    const tenantId = data?.insert_user_one?.tenant_id;

    invariant(userId, "User ID not found");
    invariant(tenantId, "Tenant ID not found");

    if (isEmpty(data.insert_user_one?.active_tokens))
      await generateNewToken.call(this, { userId, tenantId, now });

    return data?.insert_user_one ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
