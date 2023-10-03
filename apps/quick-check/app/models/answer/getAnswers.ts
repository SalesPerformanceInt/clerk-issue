import invariant from "tiny-invariant";

import type { BaseUserQuestionFragment } from "~/graphql";

import {
  REVIEW_CORRECT,
  REVIEW_DIFFICULTY_BASE,
  REVIEW_WRONG,
} from "~/utils/constants";
import { getNextValidBusinessDate } from "~/utils/date";

import { parseAnswer, type Answer, type AnswerToReview } from "./answer";
import { reviewAnswer } from "./reviewAnswer";

/**
 * Get Answers
 */

export const getCurrentAnswer = async (request: Request) => {
  const formData = await request.formData();

  const currentAnswer = parseAnswer(formData.get("data"));

  invariant(currentAnswer, "Answer not found");

  return { currentAnswer };
};

/**
 * Get Reviewed Answer
 */

export const getReviewedAnswer = (
  userQuestion: BaseUserQuestionFragment,
  currentAnswer: Answer,
) => {
  const answerToReview: AnswerToReview = {
    answerDate: currentAnswer.now,
    lastAnsweredOn: userQuestion.last_answered_on || userQuestion.active_on!,
    performanceRating: currentAnswer.correct ? REVIEW_CORRECT : REVIEW_WRONG,
    latestReviewGap: userQuestion.latest_review_gap,
    difficulty: userQuestion.difficulty || REVIEW_DIFFICULTY_BASE,
    streak: userQuestion.streak || 0,
    score: currentAnswer.correct ? 2 : 1,
  };

  const reviewedAnswer = reviewAnswer(answerToReview);

  const userQuestionNextActiveDate = getNextValidBusinessDate(
    new Date(currentAnswer.now),
    reviewedAnswer.latestReviewGap,
  );

  return {
    reviewedAnswer,
    userQuestionNextActiveDate,
  };
};
