import type { Expand } from "quickcheck-shared";

import type { RankeableEnrollment } from "~/graphql";

/**
 * Enrollments By Taxonomy
 */

type Taxonomy = {
  display_name: string;
  uid: string;
  title: string;
};

export type EnrollmentsByTaxonomyId = Record<string, RankeableEnrollment[]>;
export type MappedEnrollmentsByTaxonomyId = [string, RankeableEnrollment[]][];

export type EnrollmentsByTaxonomy = {
  taxonomy: Taxonomy;
  enrollments: RankeableEnrollment[];
};

/**
 * Leaderboard Enrollment
 */

export type LeaderboardEnrollment = {
  rank: number;
} & Expand<Omit<RankeableEnrollment, "rank">>;

/**
 * Leaderboard User Enrollment
 */

export type LeaderboardUserEnrollment = {
  displayName: string;
} & LeaderboardEnrollment;
