import {
  DAYS_BETWEEN_REVIEWS,
  DAYS_OVERFLOW,
  DAY_MS,
  DIFFICULTY_MAX,
  DIFFICULTY_MIN,
  WRONG,
} from "~/utils/reviewConstants";

import type { AnswerToReview, ReviewedAnswer } from "./answer";

/**
 * Percent Overdue
 */

const getPercentOverdue = ({
  answerDate,
  performanceRating,
  lastAnsweredOn,
  latestReviewGap,
}: AnswerToReview) => {
  if (performanceRating === WRONG) return 1;

  const daysSinceLastReview = lastAnsweredOn
    ? Math.floor((answerDate.getTime() - lastAnsweredOn.getTime()) / DAY_MS)
    : 0;

  const percentOverdue = daysSinceLastReview / latestReviewGap || 1;

  return Math.min(2, percentOverdue);
};

/**
 * Difficulty
 */

const getDifficulty = (
  percentOverdue: number,
  { performanceRating, difficulty }: AnswerToReview,
) => {
  const difficultyRating = (8 - 9 * performanceRating) / 17;
  const difficultyOverdue = percentOverdue * difficultyRating;

  const updatedDifficulty = Math.min(
    Math.max(difficulty + difficultyOverdue, DIFFICULTY_MIN),
    DIFFICULTY_MAX,
  );
  const difficultyWeight = 3 - 1.7 * updatedDifficulty;

  return { updatedDifficulty, difficultyWeight };
};

/**
 * Days Between Reviews
 */

const getReviewGap = (
  percentOverdue: number,
  difficultyWeight: number,
  { performanceRating, latestReviewGap }: AnswerToReview,
) => {
  if (performanceRating === WRONG) return DAYS_OVERFLOW;

  const baseDays = Math.round(
    (difficultyWeight - DAYS_OVERFLOW) * percentOverdue,
  );
  const updatedReviewGap =
    latestReviewGap * (DAYS_OVERFLOW + baseDays) || DAYS_BETWEEN_REVIEWS;

  return updatedReviewGap;
};

/**
 * Review Answer
 */

export const reviewAnswer = (answerToReview: AnswerToReview) => {
  const percentOverdue = getPercentOverdue(answerToReview);

  const { updatedDifficulty, difficultyWeight } = getDifficulty(
    percentOverdue,
    answerToReview,
  );

  const updatedReviewGap = getReviewGap(
    percentOverdue,
    difficultyWeight,
    answerToReview,
  );

  const reviewedAnswer: ReviewedAnswer = {
    difficulty: updatedDifficulty,
    latestReviewGap: updatedReviewGap,
    lastAnsweredOn: new Date(answerToReview.answerDate),
    streak:
      answerToReview.performanceRating === WRONG
        ? 0
        : answerToReview.streak + 1,
  };

  return reviewedAnswer;
};
