import invariant from "tiny-invariant";
import type { UserGraphQLClient } from "~/graphql";

import { getActiveDate } from "~/utils/prepareActiveQuestions";

import { parseAnswer, type Answer, type ReviewedAnswer } from "./answer";
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

export const getPreviousAnswer = async (
  userApolloClient: UserGraphQLClient,
  currentAnswer: Answer,
) => {
  const userQuestionLearningRecord =
    await userApolloClient.getUserQuestionLearningRecord(
      currentAnswer.questionId,
    );

  const [previousAnswer, dateLastReviewed] = [
    userQuestionLearningRecord?.data as ReviewedAnswer | null,
    userQuestionLearningRecord?.created_at,
  ];

  return { previousAnswer, dateLastReviewed };
};

/**
 * Get Reviewed Answer
 */

export const getReviewedAnswer = ([
  answerDate,
  previousAnswer,
  currentAnswer,
  dateLastReviewed,
]: Parameters<typeof reviewAnswer>) => {
  const reviewedAnswer = reviewAnswer(
    answerDate,
    previousAnswer,
    currentAnswer,
    dateLastReviewed,
  );

  const userQuestionNextActiveDate = getActiveDate(
    answerDate,
    reviewedAnswer.daysBetweenReviews,
  );

  return { reviewedAnswer, userQuestionNextActiveDate };
};
