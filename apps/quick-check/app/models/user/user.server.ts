import { sample } from "lodash";
import { compact, difference, filter, map, pipe } from "remeda";
import { apolloClient } from "~/graphql";

import { ANSWER, parseAnswer } from "~/models/answer";

export const getUserById = async (userId: string) => {
  return await apolloClient.getUser(userId);
};

export const QUESTION_IDS = [
  "blt6c6ea2895b0cf552",
  "blt83d18d35ab5d93b3",
  "bltd06d103c170ffd02",
  "blt092567fb8564d959",
  "blt2e0f1b1dfa502dda",
  "blt9599d6edce6d3edc",
  "blt1f05234ef8981744",
  "bltbd9925dc4cf37e39",
  "blt04509563bf0a934b",
  "bltbdc7d20e6f1dea0f",
] as const;

export const generateNextQuestion = async (userId: string) => {
  const user = await apolloClient.getUser(userId);
  const learning_records = user?.learning_records ?? [];

  const answeredQuestionIds = pipe(
    learning_records,
    filter(({ event_type }) => event_type === ANSWER),
    map(({ data }) => parseAnswer(data)),
    compact,
    map(({ questionId }) => questionId),
  );

  const unansweredQuestionIds = difference(QUESTION_IDS, answeredQuestionIds);
  const nextQuestionId = sample(unansweredQuestionIds);

  await apolloClient.updateNextQuestionId(userId, nextQuestionId);

  return nextQuestionId;
};

export const generateNewToken = async (userId: string) => {
  return await apolloClient.generateNewToken(userId);
};
