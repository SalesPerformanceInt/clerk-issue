import {
  getUserApolloClientFromRequest,
  type User_Answer_Insert_Input,
} from "~/graphql";

import { type SaveAnswerData } from "../answer.type";

/**
 * Save User Answer
 */

export const saveUserAnswer = async (
  request: Request,
  { userQuestion, currentAnswer, reviewedAnswer }: SaveAnswerData,
) => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

  const userAnswer: User_Answer_Insert_Input = {
    user_id: userQuestion.user_id,
    question_id: userQuestion.id,
    correct: currentAnswer.correct,
    created_at: reviewedAnswer.answerDate,
  };

  return userApolloClient.createUserAnswer(userAnswer);
};
