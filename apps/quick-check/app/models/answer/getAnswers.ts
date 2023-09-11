import invariant from "tiny-invariant";
import type { BaseUserQuestionFragment } from "~/graphql";

import {
  REVIEW_CORRECT,
  REVIEW_DIFFICULTY_BASE,
  REVIEW_WRONG,
} from "~/utils/constants";
import { getNextValidBusinessDate } from "~/utils/date";

import {
  parseAnswer,
  parseAnswerDate,
  type Answer,
  type AnswerToReview,
} from "./answer";
import { reviewAnswer } from "./reviewAnswer";

/**
 * Get Answers
 */

export const getCurrentAnswer = async (request: Request) => {
  const formData = await request.formData();

  const currentAnswer = parseAnswer(formData.get("data"));
  const answerDate = parseAnswerDate(formData.get("currentDate"));

  invariant(currentAnswer, "Answer not found");

  return { currentAnswer, answerDate };
};

/**
 * Get Reviewed Answer
 */

export const getReviewedAnswer = (
  userQuestion: BaseUserQuestionFragment,
  currentAnswer: Answer,
  answerDate: string,
) => {
  const answerToReview: AnswerToReview = {
    answerDate,
    lastAnsweredOn: userQuestion.last_answered_on || null,
    performanceRating: currentAnswer.correct ? REVIEW_CORRECT : REVIEW_WRONG,
    latestReviewGap: userQuestion.latest_review_gap,
    difficulty: userQuestion.difficulty || REVIEW_DIFFICULTY_BASE,
    streak: userQuestion.streak || 0,
  };

  const reviewedAnswer = reviewAnswer(answerToReview);

  const userQuestionNextActiveDate = getNextValidBusinessDate(
    new Date(answerDate),
    reviewedAnswer.latestReviewGap,
  );

  return {
    reviewedAnswer,
    userQuestionNextActiveDate,
  };
};
