import {
  getUserApolloClientFromRequest,
  type Learning_Record_Insert_Input,
  type User_Question,
} from "~/graphql";

import { ANSWER } from "./answer";
import { getCurrentAnswer, getReviewedAnswer } from "./getAnswers";
import { shouldRetireUserQuestion } from "./retireAnswer";

/**
 * Get Question
 */

const getUserQuestion = async (request: Request) => {
  const formData = await request.formData();

  const userQuestion = formData.get("userQuestion") as unknown as User_Question;

  return { userQuestion };
};

/**
 * Save Answer
 */

export const saveAnswer = async (request: Request) => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

  const { userQuestion } = await getUserQuestion(request);

  const { currentAnswer, answerDate } = await getCurrentAnswer(request);

  const { reviewedAnswer, userQuestionNextActiveDate } = getReviewedAnswer(
    userQuestion,
    currentAnswer,
    answerDate,
  );

  const learningRecord: Learning_Record_Insert_Input = {
    user_id: userApolloClient.userId,
    event_type: ANSWER,
    data: reviewedAnswer,
  };

  await userApolloClient.updateUserQuestion(
    userQuestion.id,
    {
      active_on: userQuestionNextActiveDate,
      status: shouldRetireUserQuestion(userQuestion, reviewedAnswer),
    },
    { attempts: 1 },
  );

  return await userApolloClient.createLearningRecord(learningRecord);
};
