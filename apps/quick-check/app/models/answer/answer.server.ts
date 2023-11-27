import invariant from "tiny-invariant";

import { getUserApolloClientFromRequest } from "~/graphql";

import { getCurrentAnswer, getReviewedAnswer } from "./handlers/getAnswers";
import { saveUserAnswer } from "./actions/saveAnswer";
import { updateTaxonomyEnrollmentsRanks } from "./actions/updateTaxonomyEnrollmentsRanks";
import { updateUserFromAnswer } from "./actions/updateUserFromAnswer";

import type { Answer, SaveAnswerData } from "./answer.type";

/**
 * Prepare Answer Data
 */

const prepareAnswerData = async (
  request: Request,
  currentAnswer: Answer,
): Promise<SaveAnswerData> => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

  const user = await userApolloClient.getUser();
  invariant(user, "User not found");

  const userQuestion = await userApolloClient.getUserQuestion(
    currentAnswer.userQuestionId,
  );
  invariant(userQuestion, "Question not found");

  const userQuestionAnswers = await userApolloClient.getUserQuestionAnswers(
    userQuestion.id,
  );

  const { reviewedAnswer, userQuestionNextActiveDate } = getReviewedAnswer(
    userQuestion,
    userQuestionAnswers,
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
  const { currentAnswer } = await getCurrentAnswer(request);

  const { reviewedAnswer, userQuestion } = await prepareAnswerData(
    request,
    currentAnswer,
  ).then(async (answerData) => {
    await Promise.all([
      saveUserAnswer(request, answerData),
      updateUserFromAnswer(request, answerData),
    ]);

    updateTaxonomyEnrollmentsRanks(request, answerData);

    return answerData;
  });

  const totalScore = userQuestion.user_enrollment.score + reviewedAnswer.score;

  return { currentAnswer, reviewedAnswer, totalScore };
};
