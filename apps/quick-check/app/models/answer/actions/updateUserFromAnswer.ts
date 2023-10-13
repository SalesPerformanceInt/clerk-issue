import { getUserApolloClientFromRequest } from "~/graphql";

import type { SaveAnswerData } from "../answer";
import { getRetiredOn } from "../handlers/retireAnswer";
import { getUpdatedWeeklyStreakData } from "../handlers/weeklyStreak";

/**
 * Update User From Answer
 */

export const updateUserFromAnswer = async (
  request: Request,
  {
    userQuestion,
    currentAnswer,
    reviewedAnswer,
    userQuestionNextActiveDate,
    user,
  }: SaveAnswerData,
) => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

  await userApolloClient.updateUserQuestion(userQuestion.id, {
    active_on: userQuestionNextActiveDate,
    retired_on: getRetiredOn(userQuestion, reviewedAnswer),
    latest_review_gap: reviewedAnswer.latestReviewGap,
    difficulty: reviewedAnswer.difficulty,
    streak: reviewedAnswer.streak,
    last_answered_on: reviewedAnswer.lastAnsweredOn,
  });

  await userApolloClient.updateUserEnrollment(userQuestion.user_enrollment.id, {
    inc: { score: reviewedAnswer.score },
  });

  await userApolloClient.updateUser(
    getUpdatedWeeklyStreakData(user, currentAnswer.now),
  );
};
