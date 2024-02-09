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

  const retiredOn = getRetiredOn(userQuestion, reviewedAnswer);

  const updatedUserQuestion = await userApolloClient.updateUserQuestion(
    userQuestion.id,
    {
      active_on: userQuestionNextActiveDate,
      retired_on: retiredOn,
      latest_review_gap: reviewedAnswer.latestReviewGap,
      difficulty: reviewedAnswer.difficulty,
      streak: reviewedAnswer.streak,
      last_answered_on: reviewedAnswer.answerDate,
    },
  );

  if (retiredOn) {
    userApolloClient.createEvent({
      type: "QuestionRetired",
      data: {
        enrollment_id: userQuestion.user_enrollment.id,
        question_id: userQuestion.id,
        taxonomy_id: userQuestion.user_enrollment.taxonomy_id,
        attempts: updatedUserQuestion?.attempts.aggregate?.count ?? 0,
      },
    });
  } else {
    userApolloClient.createEvent({
      type: "QuestionScheduled",
      data: {
        enrollment_id: userQuestion.user_enrollment.id,
        question_id: userQuestion.id,
        taxonomy_id: userQuestion.user_enrollment.taxonomy_id,
        attempts: updatedUserQuestion?.attempts.aggregate?.count ?? 0,
        scheduled: userQuestionNextActiveDate,
      },
    });
  }

  const updatedEnrollment = await userApolloClient.updateUserEnrollment(
    userQuestion.user_enrollment.id,
    {
      inc: { score: reviewedAnswer.score },
    },
  );

  userApolloClient.createEvent({
    type: "EnrollmentScored",
    data: {
      enrollment_id: userQuestion.user_enrollment.id,
      question_id: userQuestion.id,
      points: reviewedAnswer.score,
      score: updatedEnrollment?.score ?? 0,
      rank: updatedEnrollment?.rank ?? 0,
    },
  });

  return updatedEnrollment;
};
