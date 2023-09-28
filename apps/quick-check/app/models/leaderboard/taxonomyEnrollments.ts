import { groupBy, pipe } from "remeda";
import invariant from "tiny-invariant";

import { contentStack } from "~/contentstack.server";

import type {
  EnrollmentScore,
  EnrollmentsByTaxonomy,
  EnrollmentsByTaxonomyId,
  MappedEnrollmentsByTaxonomyId,
} from "./leaderboard.types";

/**
 * Taxonomy Enrollments Pipes
 */

const filterEnrollmentsByScore = (enrollments: EnrollmentScore[]) => {
  return enrollments.filter((enrollment) => enrollment.score);
};

const groupEnrollmentsByTaxonomy = (enrollments: EnrollmentScore[]) => {
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
  enrollments: EnrollmentScore[],
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