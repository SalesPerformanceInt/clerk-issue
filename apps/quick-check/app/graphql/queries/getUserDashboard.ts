import { contentStack } from "~/contentstack.server";
import { graphql, type WithApolloClient } from "~/graphql";

export const GET_USER_DASHBOARD = graphql(/* GraphQL */ `
  query GetUserDashboard($userId: uuid!) {
    user_by_pk(user_id: $userId) {
      ...BaseUser
      user_enrollments {
        taxonomy_id
        id
        attempted: user_questions_aggregate(
          where: { status: { _eq: "attempted" } }
        ) {
          aggregate {
            count
          }
        }
        unattempted: user_questions_aggregate(
          where: { status: { _eq: "unattempted" } }
        ) {
          aggregate {
            count
          }
        }
        retired: user_questions_aggregate(
          where: { status: { _eq: "retired" } }
        ) {
          aggregate {
            count
          }
        }
        total: user_questions_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`);

export async function getUserDashboard(this: WithApolloClient, userId: string) {
  try {
    const result = await this.client.query({
      query: GET_USER_DASHBOARD,
      variables: { userId },
      fetchPolicy: "no-cache",
    });

    if (!result.data?.user_by_pk) return null;

    const { user_by_pk } = result.data;

    const user_enrollments = await Promise.all(
      user_by_pk.user_enrollments.map(async (enrollment) => {
        const taxonomy = await contentStack.getTaxonomy(enrollment.taxonomy_id);
        return {
          ...enrollment,
          taxonomy,
        };
      }),
    );

    return {
      ...user_by_pk,
      user_enrollments,
    };
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}

export type DashboardData = NonNullable<
  Awaited<ReturnType<typeof getUserDashboard>>
>;
