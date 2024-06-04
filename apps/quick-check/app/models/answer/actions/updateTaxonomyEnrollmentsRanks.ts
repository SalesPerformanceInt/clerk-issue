import { waitUntil } from "@vercel/functions"

import { getAdminApolloClientFromRequest } from "~/graphql"

import { prepareRankedEnrollmentsUpdateSet } from "~/models/leaderboard/handlers/prepareRankedEnrollmentsUpdateSet"
import { prepareTaxonomyEnrollments } from "~/models/leaderboard/handlers/prepareTaxonomyEnrollments"
import type { EnrollmentsByTaxonomy } from "~/models/leaderboard/leaderboard.types"

import type { SaveAnswerData } from "../answer.type"

/**
 * Update User Enrollments Ranks
 */

const getTaxonomyRankedEnrollments = (taxonomyEnrollments: EnrollmentsByTaxonomy[]) => {
  return taxonomyEnrollments.flatMap(({ enrollments }) => prepareRankedEnrollmentsUpdateSet(enrollments))
}

export const updateTaxonomyEnrollmentsRanks = async (request: Request, { userQuestion, user }: SaveAnswerData) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request)

  const enrollments = await adminApolloClient.getTaxonomyRankedEnrollments([userQuestion.user_enrollment.taxonomy_id], {
    tenantId: user.tenant_id,
  })

  if (!enrollments) return

  const taxonomyEnrollments = await prepareTaxonomyEnrollments(enrollments, user.user_id)

  const rankedEnrollments = getTaxonomyRankedEnrollments(taxonomyEnrollments)

  waitUntil(adminApolloClient.updateUserEnrollmentsRanks(rankedEnrollments))
}
