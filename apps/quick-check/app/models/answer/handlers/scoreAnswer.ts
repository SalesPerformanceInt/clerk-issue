import { MatchedMap } from "quickcheck-shared";

import type { BaseUserAnswerFragment } from "~/graphql";

import type { Answer } from "../answer.type";

/**
 * Scoring Map
 */

type AnswerAttempts = {
  first: boolean;
  second?: boolean;
  third?: boolean;
};

const answerScoringMap = new MatchedMap<AnswerAttempts, number>([
  [{ first: true }, 25],
  [{ first: false }, 10],

  [{ first: true, second: true }, 25],
  [{ first: false, second: true }, 20],

  [{ first: false, second: true, third: true }, 15],
  [{ first: true, second: false, third: true }, 10],
  [{ first: false, second: false, third: true }, 10],

  ["_", 0],
]);

/**
 * Score Answer
 */

export const scoreAnswer = (
  userQuestionAnswers: BaseUserAnswerFragment[] | null,
  currentAnswer: Answer,
) => {
  if (!userQuestionAnswers)
    return answerScoringMap.get({ first: currentAnswer.correct });

  const [first, second] = userQuestionAnswers;

  const answerAttempts: AnswerAttempts = {
    first: first?.correct ?? currentAnswer.correct,
    ...(first && { second: second?.correct ?? currentAnswer.correct }),
    ...(second && { third: currentAnswer.correct }),
  };

  const answerScore = answerScoringMap.get(answerAttempts);

  return answerScore;
};
