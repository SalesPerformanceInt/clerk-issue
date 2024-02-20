import { getContentStackClient } from "~/contentstack.server";
import { groupBy, pipe } from "remeda";

import { invariant } from "quickcheck-shared";

import { DEFAULT_LANGUAGE } from "~/contentstack";
import type { RankeableEnrollment } from "~/graphql";

import type {
  EnrollmentsByTaxonomy,
  EnrollmentsByTaxonomyId,
  MappedEnrollmentsByTaxonomyId,
} from "../leaderboard.types";

/**
 * Taxonomy Enrollments Pipes
 */

const filterEnrollmentsByScore = (enrollments: RankeableEnrollment[]) => {
  return enrollments.filter((enrollment) => enrollment.score);
};

const groupEnrollmentsByTaxonomy = (enrollments: RankeableEnrollment[]) => {
  return groupBy(enrollments, (enrollment) => enrollment.taxonomy_id);
};

const filterGroupedEnrollmentsByUser =
  (userId: string) => (groupedEnrollments: EnrollmentsByTaxonomyId) => {
    return Object.entries(groupedEnrollments).filter(([_, enrollments]) =>
      enrollments.some((enrollment) => enrollment.user_id === userId),
    );
  };

const mapEnrollmentsWithTaxonomy = async (
  mappedEnrollments: MappedEnrollmentsByTaxonomyId,
) => {
  const contentStack = getContentStackClient(DEFAULT_LANGUAGE);

  const taxonomyEnrollments = mappedEnrollments.map(
    async ([taxonomyId, enrollments]): Promise<EnrollmentsByTaxonomy> => {
      const taxonomy = await contentStack.getTaxonomy(taxonomyId);

      invariant(taxonomy, `Taxonomy not found: ${taxonomyId}`);

      return { taxonomy, enrollments };
    },
  );

  return await Promise.all(taxonomyEnrollments);
};

/**
 * Prepare Taxonomy Enrollments
 */

export const prepareTaxonomyEnrollments = (
  enrollments: RankeableEnrollment[],
  userId: string,
) => {
  return pipe(
    enrollments,
    filterEnrollmentsByScore,
    groupEnrollmentsByTaxonomy,
    filterGroupedEnrollmentsByUser(userId),
    mapEnrollmentsWithTaxonomy,
  );
};
