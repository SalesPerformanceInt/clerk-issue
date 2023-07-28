import {
  getUserApolloClientFromRequest,
  type Learning_Record_Insert_Input,
} from "~/graphql";

import { parseAnswer } from "./answer";

export const ANSWER = "ANSWER";

export const saveAnswer = async (request: Request) => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

  const formData = await request.formData();
  const data = parseAnswer(formData.get("data"));

  const learningRecord: Learning_Record_Insert_Input = {
    user_id: userApolloClient.userId,
    event_type: "ANSWER",
    data,
  };

  const questionId = data?.questionId;

  if (questionId) {
    await userApolloClient.updateUserQuestion(data?.questionId, {
      active_on: null,
      status: "attempted",
    });
  }

  return await userApolloClient.createLearningRecord(learningRecord);
};
