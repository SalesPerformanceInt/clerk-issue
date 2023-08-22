import {
  CORRECT,
  DAYS_BETWEEN_REVIEWS,
  DAYS_OVERFLOW,
  DAY_MS,
  DIFFICULTY_BASE,
  DIFFICULTY_MAX,
  DIFFICULTY_MIN,
  WRONG,
} from "~/utils/reviewConstants";

import type { Answer, ReviewedAnswer, ToReview } from "./answer";

/**
 * Percent Overdue
 */

const getPercentOverdue = ({
  answerDate,
  performanceRating,
  dateLastReviewed,
  daysBetweenReviews,
}: ToReview) => {
  if (performanceRating === WRONG) return 1;

  const daysSinceLastReview = dateLastReviewed
    ? Math.floor((answerDate.getTime() - dateLastReviewed.getTime()) / DAY_MS)
    : 0;

  const percentOverdue = daysSinceLastReview / daysBetweenReviews || 1;

  return Math.min(2, percentOverdue);
};

/**
 * Difficulty
 */

const getDifficulty = (
  percentOverdue: number,
  { performanceRating, difficulty }: ToReview,
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

const getDaysBetweenReviews = (
  percentOverdue: number,
  difficultyWeight: number,
  { performanceRating, daysBetweenReviews }: ToReview,
) => {
  if (performanceRating === WRONG) return DAYS_OVERFLOW;

  const baseDays = Math.round(
    (difficultyWeight - DAYS_OVERFLOW) * percentOverdue,
  );
  const updatedDaysBetweenReviews =
    daysBetweenReviews * (DAYS_OVERFLOW + baseDays) || DAYS_BETWEEN_REVIEWS;

  return updatedDaysBetweenReviews;
};

/**
 * Review Answer
 */

export const reviewAnswer = (
  previousAnswer: ReviewedAnswer | null,
  currentAnswer: Answer,
  dateLastReviewed?: string,
): ReviewedAnswer => {
  const toReview: ToReview = {
    performanceRating: currentAnswer.correct ? CORRECT : WRONG,
    daysBetweenReviews: previousAnswer?.daysBetweenReviews || 0,
    difficulty: previousAnswer?.difficulty || DIFFICULTY_BASE,
    dateLastReviewed: dateLastReviewed ? new Date(dateLastReviewed) : null,
    answerDate: new Date(),
  };

  const percentOverdue = getPercentOverdue(toReview);

  const { updatedDifficulty, difficultyWeight } = getDifficulty(
    percentOverdue,
    toReview,
  );

  const updatedDaysBetweenReviews = getDaysBetweenReviews(
    percentOverdue,
    difficultyWeight,
    toReview,
  );

  const reviewedAnswer: ReviewedAnswer = {
    ...currentAnswer,
    difficulty: updatedDifficulty,
    daysBetweenReviews: updatedDaysBetweenReviews,
  };

  console.log({
    percentOverdue,
    updatedDifficulty,
    difficultyWeight,
    updatedDaysBetweenReviews,
  });

  return reviewedAnswer;
};
