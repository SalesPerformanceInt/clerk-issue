import { apolloClient, type Learning_Record_Insert_Input } from "~/graphql";
import { getUserIdFromSession } from "~/session.server";

import { parseAnswer } from "./answer";

export const ANSWER = "ANSWER";

export const saveAnswer = async (request: Request) => {
  const user_id = await getUserIdFromSession(request);

  const formData = await request.formData();
  const data = parseAnswer(formData.get("data"));

  const learningRecord: Learning_Record_Insert_Input = {
    user_id,
    event_type: "ANSWER",
    data,
  };

  return await apolloClient.createLearningRecord(learningRecord);
};
