import invariant from "tiny-invariant";

import {
  getUserApolloClientFromRequest,
  type Learning_Record_Insert_Input,
  type User_Answer_Insert_Input,
} from "~/graphql";

import { ANSWER } from "./answer";
import { getCurrentAnswer, getReviewedAnswer } from "./getAnswers";
import { getRetiredOn } from "./retireAnswer";

export const saveAnswer = async (request: Request) => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

  const { currentAnswer } = await getCurrentAnswer(request);

  const userQuestion = await userApolloClient.getUserQuestion(currentAnswer.id);
  invariant(userQuestion, "Question not found");

  const { reviewedAnswer, userQuestionNextActiveDate } = getReviewedAnswer(
    userQuestion,
    currentAnswer,
  );

  const learningRecord: Learning_Record_Insert_Input = {
    user_id: userQuestion.user_id,
    event_type: ANSWER,
    data: reviewedAnswer,
  };

  const userAnswer: User_Answer_Insert_Input = {
    user_id: userQuestion.user_id,
    question_id: userQuestion.id,
    correct: currentAnswer.correct,
    created_at: reviewedAnswer.lastAnsweredOn,
  };

  await userApolloClient.updateUserQuestion(userQuestion.id, {
    active_on: userQuestionNextActiveDate,
    retired_on: getRetiredOn(userQuestion, reviewedAnswer),
    latest_review_gap: reviewedAnswer.latestReviewGap,
    difficulty: reviewedAnswer.difficulty,
    streak: reviewedAnswer.streak,
    last_answered_on: reviewedAnswer.lastAnsweredOn,
  });

  await userApolloClient.updateUserEnrollment(userQuestion.user_enrollment.id, {
    inc: {
      score: reviewedAnswer.score,
    },
  });

  await userApolloClient.createUserAnswer(userAnswer);

  const user = await userApolloClient.getUser();
  invariant(user, "User not found");

  return await userApolloClient.createLearningRecord(learningRecord);
};
