import { isEmpty } from "remeda";

import { invariant, logError, RequiredKeys } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyAllData,
  type GraphQLClient,
  type User_Insert_Input,
} from "~/graphql";

import { generateNewToken } from "./generateNewToken";

export const UPSERT_USER = graphql(/* GraphQL */ `
  mutation UpsertUser($user: user_insert_input!, $tenantId: String!) {
    insert_user_one(
      object: $user
      on_conflict: {
        constraint: user_pkey
        update_columns: [
          email
          first_name
          last_name
          language_preference
          phone_number
          timezone
          show_leaderboard
        ]
      }
    ) {
      ...UserWithActiveToken
    }
    insert_tenant_one(
      object: { tenant_id: $tenantId }
      on_conflict: { constraint: tenant_pkey, update_columns: [] }
    ) {
      tenant_id
      theme_id
    }
  }
`);

export type UpsertUserInput = RequiredKeys<
  User_Insert_Input,
  "user_id" | "tenant_id" | "first_name" | "last_name" | "email"
>;

export async function upsertUser(
  this: GraphQLClient,
  user: UpsertUserInput,
  proxyData: GQLProxyAllData,
) {
  const { now, tenantId, userId } = proxyData;

  try {
    const result = await this.mutate({
      mutation: UPSERT_USER,
      variables: { user, tenantId },
    });

    const { data } = result;

    invariant(data?.insert_user_one, "User not found");

    if (isEmpty(data.insert_user_one?.active_tokens))
      await generateNewToken.call(this, { userId, tenantId, now });

    return data?.insert_user_one ?? null;
  } catch (error) {
    logError({ error, log: "upsertUser" });
    return null;
  }
}
