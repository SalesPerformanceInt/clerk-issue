import {
  DAY_MS,
  REVIEW_DAYS_OVERFLOW,
  REVIEW_DIFFICULTY_MAX,
  REVIEW_DIFFICULTY_MIN,
  REVIEW_LATEST_REVIEW_GAP,
  REVIEW_WRONG,
} from "~/utils/constants";

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
  if (performanceRating === REVIEW_WRONG) return 1;

  const daysSinceLastReview = lastAnsweredOn
    ? Math.floor(
        (new Date(answerDate).getTime() - new Date(lastAnsweredOn).getTime()) /
          DAY_MS,
      )
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
    Math.max(difficulty + difficultyOverdue, REVIEW_DIFFICULTY_MIN),
    REVIEW_DIFFICULTY_MAX,
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
  if (performanceRating === REVIEW_WRONG) return REVIEW_DAYS_OVERFLOW;

  const baseDays = Math.round(
    (difficultyWeight - REVIEW_DAYS_OVERFLOW) * percentOverdue,
  );
  const updatedReviewGap =
    latestReviewGap * (REVIEW_DAYS_OVERFLOW + baseDays) ||
    REVIEW_LATEST_REVIEW_GAP;

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
    lastAnsweredOn: answerToReview.answerDate,
    streak:
      answerToReview.performanceRating === REVIEW_WRONG
        ? 0
        : answerToReview.streak + 1,
  };

  return reviewedAnswer;
};
