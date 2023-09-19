import type { Expand } from "quickcheck-shared";

import type { GetRankedUserEnrollmentsQuery } from "~/graphql";

/**
 * Enrollment Score
 */

export type EnrollmentScore =
  GetRankedUserEnrollmentsQuery["user_enrollment"][number];

/**
 * Enrollments By Taxonomy
 */

type Taxonomy = {
  display_name: string;
  uid: string;
  title: string;
};

export type EnrollmentsByTaxonomyId = Record<string, EnrollmentScore[]>;
export type EnrollmentsByTaxonomy = {
  taxonomy: Taxonomy;
  enrollments: EnrollmentScore[];
};

/**
 * Leaderboard Enrollment
 */

export type LeaderboardUserEnrollment = {
  displayName: string;
  rank: number;
} & Expand<Pick<EnrollmentScore, "id" | "score" | "taxonomy_id">>;
