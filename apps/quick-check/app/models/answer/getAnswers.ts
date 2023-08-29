import invariant from "tiny-invariant";
import type { User_Question } from "~/graphql";

import { getActiveDate } from "~/utils/prepareActiveQuestions";
import { CORRECT, DIFFICULTY_BASE, WRONG } from "~/utils/reviewConstants";

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
  userQuestion: User_Question,
  currentAnswer: Answer,
  answerDate: Date,
) => {
  const lastAnsweredOn = userQuestion.last_answered_on
    ? new Date(userQuestion.last_answered_on)
    : null;

  const answerToReview: AnswerToReview = {
    answerDate,
    lastAnsweredOn,
    performanceRating: currentAnswer.correct ? CORRECT : WRONG,
    latestReviewGap: userQuestion.latest_review_gap,
    difficulty: userQuestion.difficulty || DIFFICULTY_BASE,
    streak: userQuestion.streak || 0,
  };

  const reviewedAnswer = reviewAnswer(answerToReview);

  const userQuestionNextActiveDate = getActiveDate(
    answerDate,
    reviewedAnswer.latestReviewGap,
  );

  return {
    reviewedAnswer,
    userQuestionNextActiveDate,
  };
};
