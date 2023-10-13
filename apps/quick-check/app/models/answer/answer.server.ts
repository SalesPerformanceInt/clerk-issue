import invariant from "tiny-invariant";

import { getUserApolloClientFromRequest } from "~/graphql";

import { getCurrentAnswer, getReviewedAnswer } from "./handlers/getAnswers";

import { saveUserAnswer } from "./actions/saveAnswer";
import { updateTaxonomyEnrollmentsRanks } from "./actions/updateTaxonomyEnrollmentsRanks";
import { updateUserFromAnswer } from "./actions/updateUserFromAnswer";

import type { SaveAnswerData } from "./answer.type";

/**
 * Prepare Answer Data
 */

const prepareAnswerData = async (request: Request): Promise<SaveAnswerData> => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

  const user = await userApolloClient.getUser();
  invariant(user, "User not found");

  const { currentAnswer } = await getCurrentAnswer(request);

  const userQuestion = await userApolloClient.getUserQuestion(currentAnswer.id);
  invariant(userQuestion, "Question not found");

  const { reviewedAnswer, userQuestionNextActiveDate } = getReviewedAnswer(
    userQuestion,
    currentAnswer,
  );

  return {
    user,
    userQuestion,
    currentAnswer,
    reviewedAnswer,
    userQuestionNextActiveDate,
  };
};

/**
 * Save Answer
 */

export const saveAnswer = async (request: Request) => {
  const answerData = await prepareAnswerData(request);

  await saveUserAnswer(request, answerData);
  await updateUserFromAnswer(request, answerData);
  await updateTaxonomyEnrollmentsRanks(request, answerData);

  return;
};
