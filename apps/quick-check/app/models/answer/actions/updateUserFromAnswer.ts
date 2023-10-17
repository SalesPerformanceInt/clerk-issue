import { getUserApolloClientFromRequest } from "~/graphql";

import type { SaveAnswerData } from "../answer.type";
import { getRetiredOn } from "../handlers/retireAnswer";

/**
 * Update User From Answer
 */

export const updateUserFromAnswer = async (
  request: Request,
  { userQuestion, reviewedAnswer, userQuestionNextActiveDate }: SaveAnswerData,
) => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

  userApolloClient.updateUserQuestion(userQuestion.id, {
    active_on: userQuestionNextActiveDate,
    retired_on: getRetiredOn(userQuestion, reviewedAnswer),
    latest_review_gap: reviewedAnswer.latestReviewGap,
    difficulty: reviewedAnswer.difficulty,
    streak: reviewedAnswer.streak,
    last_answered_on: reviewedAnswer.lastAnsweredOn,
  });

  return userApolloClient.updateUserEnrollment(
    userQuestion.user_enrollment.id,
    {
      inc: { score: reviewedAnswer.score },
    },
  );
};
