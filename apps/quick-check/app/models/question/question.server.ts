import { getContentStackClient } from "~/contentstack.server";
import { compact, first, map, pipe } from "remeda";

import {
  invariant,
  variants,
  type QuestionItemVariant,
} from "quickcheck-shared";

import type { BaseUserQuestionFragment } from "~/graphql";

export const getQuestionData = async (
  userQuestion: BaseUserQuestionFragment,
) => {
  const language = userQuestion.user.language_preference;
  const contentStack = getContentStackClient(language);

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

const getVariantNames = (questionItemVariants: QuestionItemVariant[]) =>
  pipe(
    questionItemVariants,
    map((variant) => variants.find((_variant) => _variant in variant)),
    compact,
  );

export const getFirstVariant = (questionItemVariants: QuestionItemVariant[]) =>
  pipe(questionItemVariants, getVariantNames, first());

export const config = {
  maxDuration: 300,
};
