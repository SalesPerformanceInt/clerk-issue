import invariant from "tiny-invariant";
import {
  getUserApolloClientFromRequest,
  type BaseUserQuestionFragment,
  type Learning_Record_Insert_Input,
} from "~/graphql";

import { getActiveDate } from "~/utils/prepareActiveQuestions";

import { parseAnswer, type ReviewedAnswer } from "./answer";
import { reviewAnswer } from "./reviewAnswer";

export const ANSWER = "ANSWER";

export const shouldRetireUserQuestion = (
  userQuestion: BaseUserQuestionFragment,
) => userQuestion.attempts >= 2;

export const saveAnswer = async (request: Request) => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

  const formData = await request.formData();
  const currentAnswer = parseAnswer(formData.get("data"));

  invariant(currentAnswer, "Answer not found");

  const userQuestion = await userApolloClient.getUserQuestion(currentAnswer.id);

  invariant(userQuestion, "Question not found");

  const userQuestionLearningRecord =
    await userApolloClient.getUserQuestionLearningRecord(
      currentAnswer.questionId,
    );

  const [previousAnswer, dateLastReviewed] = [
    userQuestionLearningRecord?.data as ReviewedAnswer | null,
    userQuestionLearningRecord?.created_at,
  ];

  const reviewedAnswer = reviewAnswer(
    previousAnswer,
    currentAnswer,
    dateLastReviewed,
  );

  const nextUserQuestionDate = getActiveDate(
    new Date(),
    reviewedAnswer.daysBetweenReviews,
  );

  const learningRecord: Learning_Record_Insert_Input = {
    user_id: userApolloClient.userId,
    event_type: "ANSWER",
    data: reviewedAnswer,
  };

  await userApolloClient.updateUserQuestion(
    userQuestion.id,
    {
      active_on: nextUserQuestionDate,
      status: shouldRetireUserQuestion(userQuestion) ? "retire" : "attempted",
    },
    { attempts: 1 },
  );

  return await userApolloClient.createLearningRecord(learningRecord);
};
