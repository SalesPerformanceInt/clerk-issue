import type { Expand } from "quickcheck-shared"

import type { TaxonomyRankedEnrollment } from "~/graphql"

/**
 * Enrollments By Taxonomy
 */

type Taxonomy = {
  display_name: string
  uid: string
  title: string
}

export type EnrollmentsByTaxonomyId = Record<string, TaxonomyRankedEnrollment[]>
export type MappedEnrollmentsByTaxonomyId = [string, TaxonomyRankedEnrollment[]][]

export type EnrollmentsByTaxonomy = {
  taxonomy: Taxonomy
  enrollments: TaxonomyRankedEnrollment[]
}

/**
 * Leaderboard Enrollment
 */

export type LeaderboardEnrollment = {
  rank: number
} & Expand<Omit<TaxonomyRankedEnrollment, "rank">>

/**
 * Leaderboard User Enrollment
 */

export type LeaderboardUserEnrollment = {
  displayName: string
} & LeaderboardEnrollment

/**
 * Leaderboard View
 */

export const leaderboardView = ["AllTime", "Focused"] as const
export type LeaderboardView = (typeof leaderboardView)[number]
