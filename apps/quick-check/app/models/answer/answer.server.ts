import { waitUntil } from "@vercel/functions";

import { invariant } from "quickcheck-shared";

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

  const answerData = await prepareAnswerData(request, currentAnswer);

  await Promise.all([
    saveUserAnswer(request, answerData),
    updateUserFromAnswer(request, answerData),
  ]);

  waitUntil(updateTaxonomyEnrollmentsRanks(request, answerData));

  const { reviewedAnswer, userQuestion } = answerData;

  const totalScore = userQuestion.user_enrollment.score + reviewedAnswer.score;

  const userApolloClient = await getUserApolloClientFromRequest(request);
  userApolloClient.createEvent({
    type: "QuestionAnswered",
    data: {
      enrollment_id: userQuestion.user_enrollment.id,
      question_id: userQuestion.id,
      taxonomy_id: userQuestion.user_enrollment.taxonomy_id,
      variant: currentAnswer.variant,
      choices: [currentAnswer.uid],
      points: reviewedAnswer.score,
      correct: currentAnswer.correct,
      attempt: userQuestion.attempts.aggregate?.count ?? 0,
    },
  });

  return { currentAnswer, reviewedAnswer, totalScore };
};
