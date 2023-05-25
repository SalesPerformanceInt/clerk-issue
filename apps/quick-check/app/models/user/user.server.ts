import { compact, difference, filter, first, map, pipe } from "remeda";
import { apolloClient } from "~/graphql";
import { requireUserSession } from "~/session.server";

import { ANSWER, parseAnswer } from "~/models/answer";

export const getUserById = async (userId: string) => {
  return await apolloClient.getUser(userId);
};

export const QUESTION_IDS = [
  "blt9babc1c5d666bcb9", // "What is the name of a baby turkey?"
  "bltc3d9181c17e53307", // "Stakeholder"
  "blt9599d6edce6d3edc", // "Presence"
] as const;

export const generateNextQuestion = async (request: Request) => {
  const userId = await requireUserSession(request);
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
  const nextQuestionId = first(unansweredQuestionIds);

  await apolloClient.updateNextQuestionId(userId, nextQuestionId);

  return nextQuestionId;
};
