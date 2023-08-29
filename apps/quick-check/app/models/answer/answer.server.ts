import invariant from "tiny-invariant";
import {
  getUserApolloClientFromRequest,
  type Learning_Record_Insert_Input,
  type UserGraphQLClient,
  type User_Question,
} from "~/graphql";

import { ANSWER, type Answer } from "./answer";
import { getCurrentAnswer, getReviewedAnswer } from "./getAnswers";
import { shouldRetireUserQuestion } from "./retireAnswer";

/**
 * Get Question
 */

const getUserQuestion = async (
  userApolloClient: UserGraphQLClient,
  currentAnswer: Answer,
) => {
  const userQuestion = (await userApolloClient.getUserQuestion(
    currentAnswer.id,
  )) as User_Question;

  invariant(userQuestion, "Question not found");

  return { userQuestion };
};

/**
 * Save Answer
 */

export const saveAnswer = async (request: Request) => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

  const { currentAnswer, answerDate } = await getCurrentAnswer(request);

  const { userQuestion } = await getUserQuestion(
    userApolloClient,
    currentAnswer,
  );

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
      latest_review_gap: reviewedAnswer.latestReviewGap,
      difficulty: reviewedAnswer.difficulty,
      streak: reviewedAnswer.streak,
      last_answered_on: reviewedAnswer.lastAnsweredOn?.toISOString(),
    },
    { attempts: 1 },
  );

  return await userApolloClient.createLearningRecord(learningRecord);
};
