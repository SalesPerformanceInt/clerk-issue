import type { Expand } from "quickcheck-shared";

import type { GetRankeableEnrollmentsQuery } from "~/graphql";

/**
 * Enrollment Score
 */

export type EnrollmentScore =
  GetRankeableEnrollmentsQuery["user_enrollment"][number];

/**
 * Enrollments By Taxonomy
 */

type Taxonomy = {
  display_name: string;
  uid: string;
  title: string;
};

export type EnrollmentsByTaxonomyId = Record<string, EnrollmentScore[]>;
export type MappedEnrollmentsByTaxonomyId = [string, EnrollmentScore[]][];

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
