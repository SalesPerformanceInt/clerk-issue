import {
  getUserApolloClientFromRequest,
  type Learning_Record_Insert_Input,
  type User_Answer_Insert_Input,
} from "~/graphql";

import { ANSWER, type SaveAnswerData } from "../answer.type";

/**
 * Save User Answer
 */

export const saveUserAnswer = async (
  request: Request,
  { userQuestion, currentAnswer, reviewedAnswer }: SaveAnswerData,
) => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

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

  await userApolloClient.createLearningRecord(learningRecord);

  await userApolloClient.createUserAnswer(userAnswer);
};
