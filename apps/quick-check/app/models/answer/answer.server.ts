import invariant from "tiny-invariant";
import {
  getUserApolloClientFromRequest,
  type Learning_Record_Insert_Input,
  type UserGraphQLClient,
} from "~/graphql";

import { ANSWER, type Answer } from "./answer";
import {
  getCurrentAnswer,
  getPreviousAnswer,
  getReviewedAnswer,
} from "./getAnswers";
import { shouldRetireUserQuestion } from "./retireAnswer";

/**
 * Get Question
 */

const getUserQuestion = async (
  userApolloClient: UserGraphQLClient,
  currentAnswer: Answer,
) => {
  const userQuestion = await userApolloClient.getUserQuestion(currentAnswer.id);

  invariant(userQuestion, "Question not found");

  return { userQuestion, currentAnswer };
};

/**
 * Save Answer
 */

export const saveAnswer = async (request: Request) => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

  const { currentAnswer } = await getCurrentAnswer(request);
  const { userQuestion } = await getUserQuestion(
    userApolloClient,
    currentAnswer,
  );
  const { previousAnswer, dateLastReviewed } = await getPreviousAnswer(
    userApolloClient,
    currentAnswer,
  );

  const { reviewedAnswer, userQuestionNextActiveDate } = getReviewedAnswer([
    new Date(),
    previousAnswer,
    currentAnswer,
    dateLastReviewed,
  ]);

  const learningRecord: Learning_Record_Insert_Input = {
    user_id: userApolloClient.userId,
    event_type: ANSWER,
    data: reviewedAnswer,
  };

  await userApolloClient.updateUserQuestion(
    userQuestion.id,
    {
      active_on: userQuestionNextActiveDate,
      status: shouldRetireUserQuestion(userQuestion) ? "retire" : "attempted",
    },
    { attempts: 1 },
  );

  return await userApolloClient.createLearningRecord(learningRecord);
};
