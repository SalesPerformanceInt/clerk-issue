import invariant from "tiny-invariant";
import { graphql, type WithApolloClient } from "~/graphql";
import { GET_USER } from "~/graphql/queries";

export const TOGGLE_USER_SMS_ENABLED = graphql(/* GraphQL */ `
  mutation ToggleUserSMSEnabled($userId: uuid!, $sms_enabled: Boolean) {
    update_user_by_pk(
      pk_columns: { user_id: $userId }
      _set: { sms_enabled: $sms_enabled }
    ) {
      ...BaseUser
    }
  }
`);

export async function toggleUserSMSEnabled(
  this: WithApolloClient,
  userId: string,
) {
  try {
    const {
      data: { user_by_pk },
    } = await this.client.query({
      query: GET_USER,
      variables: { userId },
    });

    invariant(user_by_pk, "No user found");

    const sms_enabled = !user_by_pk?.sms_enabled;

    const { data } = await this.client.mutate({
      mutation: TOGGLE_USER_SMS_ENABLED,
      variables: { userId, sms_enabled },
      optimisticResponse: {
        update_user_by_pk: { ...user_by_pk, sms_enabled },
      },
    });

    return data?.update_user_by_pk?.sms_enabled ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
