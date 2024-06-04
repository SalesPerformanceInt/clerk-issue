import { getContentStackClient } from "~/contentstack.server"

import { logError } from "quickcheck-shared"

import { flattenUserActiveQuestionsData, graphql, type GQLProxyData, type GraphQLClient } from "~/graphql"

import { getToday } from "~/utils/date"

export const GET_ENROLLMENT_DASHBOARD_DATA = graphql(/* GraphQL */ `
  query GetEnrollmentDashboardData($enrollmentId: uuid!, $today: date!) {
    user_enrollment_by_pk(id: $enrollmentId) {
      ...UserEnrollmentWithCounts
      user {
        ...UserActiveQuestionsData
        first_name
        last_name
        tenant_id
        language_preference
        show_leaderboard
      }
    }
  }
`)

export async function getEnrollmentDashboardData(this: GraphQLClient, enrollmentId: string, proxyData: GQLProxyData) {
  const { now } = proxyData

  const today = getToday(now)

  try {
    const { data } = await this.query({
      query: GET_ENROLLMENT_DASHBOARD_DATA,
      variables: { enrollmentId, today },
      fetchPolicy: "no-cache",
    })

    const enrollment = data?.user_enrollment_by_pk
    if (!enrollment) return null

    const language = enrollment.user.language_preference
    const contentStack = getContentStackClient(language)

    const taxonomy = await contentStack.getTaxonomy(enrollment.taxonomy_id)
    const expired = !!enrollment.expiration_date && today > enrollment.expiration_date

    return {
      ...enrollment,
      taxonomy,
      expired,
      ...flattenUserActiveQuestionsData(enrollment.user),
    }
  } catch (error) {
    logError({ error, log: "getEnrollmentDashboardData" })
    return null
  }
}

export type EnrollmentDashboardData = NonNullable<Awaited<ReturnType<typeof getEnrollmentDashboardData>>>
