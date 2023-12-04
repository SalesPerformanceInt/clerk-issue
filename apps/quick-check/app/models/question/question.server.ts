import { contentStack } from "~/contentstack.server";

import { invariant } from "quickcheck-shared";

import type { BaseUserQuestionFragment } from "~/graphql";

export const getQuestionData = async (
  userQuestion: BaseUserQuestionFragment,
) => {
  const questionItem = await contentStack.getQuestionItem(
    userQuestion.question_id,
  );
  invariant(questionItem, "questionItem not found");

  const enrollmentTaxonomy = await contentStack.getTaxonomy(
    userQuestion.user_enrollment.taxonomy_id,
  );
  invariant(enrollmentTaxonomy, "enrollmentTaxonomy not found");

  return { questionItem, enrollmentTaxonomy };
};
