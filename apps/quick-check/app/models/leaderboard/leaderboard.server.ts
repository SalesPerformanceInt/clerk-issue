import { groupBy, pipe } from "remeda";
import invariant from "tiny-invariant";

import { contentStack } from "~/contentstack.server";

import type {
  EnrollmentScore,
  EnrollmentsByTaxonomy,
  EnrollmentsByTaxonomyId,
} from "./leaderboard.types";

/**
 * Taxonomy Enrollments Pipes
 */

const groupEnrollmentsByTaxonomy = (enrollments: EnrollmentScore[]) => {
  return groupBy(enrollments, (enrollment) => enrollment.taxonomy_id);
};

const mapEnrollmentsWithTaxonomy = async (
  groupedEnrollments: EnrollmentsByTaxonomyId,
) => {
  const taxonomyEnrollments = Object.entries(groupedEnrollments).map(
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

export const prepareTaxonomyEnrollments = (enrollments: EnrollmentScore[]) => {
  return pipe(
    enrollments,
    groupEnrollmentsByTaxonomy,
    mapEnrollmentsWithTaxonomy,
  );
};
