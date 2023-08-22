import type { BaseUserQuestionFragment } from "~/graphql";

/**
 * Retire Answer
 */

export const shouldRetireUserQuestion = (
  userQuestion: BaseUserQuestionFragment,
) => userQuestion.attempts >= 2;
