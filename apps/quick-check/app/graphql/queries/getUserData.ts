import {
  graphql,
  type GQLProxyUserData,
  type WithApolloClient,
} from "~/graphql";

export const GET_USER_DATA = graphql(/* GraphQL */ `
  query GetUserData($userId: uuid!) {
    user_by_pk(user_id: $userId) {
      ...UserWithActiveToken
      user_enrollments {
        id
        taxonomy_id
        created_at
        score
        rank
        completed_on
        user_questions_aggregate {
          aggregate {
            count
          }
        }
      }
      user_questions(
        order_by: [{ active_on: asc, retired_on: asc_nulls_first }]
      ) {
        id
        taxonomy_id
        question_id
        active_on
        retired_on
        last_answered_on
        retired_on
        title
        user_enrollment {
          id
          taxonomy_id
        }
        user_answers(order_by: [{ created_at: asc }]) {
          id
          correct
          created_at
        }
        user_answers_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`);

export async function getUserData(
  this: WithApolloClient,
  proxyData: GQLProxyUserData,
) {
  const { userId } = proxyData;

  try {
    const { data } = await this.client.query({
      query: GET_USER_DATA,
      variables: { userId },
      fetchPolicy: "no-cache",
    });

    if (!data?.user_by_pk) return null;

    return data.user_by_pk;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}

// export type GetUserData = NonNullable<Awaited<ReturnType<typeof getUserData>>>;
