import invariant from "tiny-invariant";
import {
  getUserApolloClientFromRequest,
  type BaseUserQuestionFragment,
  type Learning_Record_Insert_Input,
} from "~/graphql";

import { parseAnswer } from "./answer";

export const ANSWER = "ANSWER";

export const shouldRetireUserQuestion = (
  userQuestion: BaseUserQuestionFragment,
) => userQuestion.attempts >= 2;

export const saveAnswer = async (request: Request) => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

  const formData = await request.formData();
  const data = parseAnswer(formData.get("data"));

  invariant(data, "Answer not found");

  const userQuestion = await userApolloClient.getUserQuestion(data.id);

  invariant(userQuestion, "Question not found");

  const learningRecord: Learning_Record_Insert_Input = {
    user_id: userApolloClient.userId,
    event_type: "ANSWER",
    data,
  };

  await userApolloClient.updateUserQuestion(
    userQuestion.id,
    {
      active_on: null,
      status: shouldRetireUserQuestion(userQuestion) ? "retire" : "attempted",
    },
    { attempts: 1 },
  );

  return await userApolloClient.createLearningRecord(learningRecord);
};
