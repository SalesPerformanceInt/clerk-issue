import {
  getAdminApolloClientFromRequest,
  getUserApolloClientFromRequest,
} from "~/graphql";

export const getUserFromRequest = async (request: Request) => {
  try {
    const userApolloClient = await getUserApolloClientFromRequest(request);
    return await userApolloClient.getUser();
  } catch (error) {
    return null;
  }
};

export const generateNextQuestionFromRequest = async (request: Request) => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

  const nextQuestion = await userApolloClient.getUserNextQuestion();
  const nextQuestionId = nextQuestion?.id ?? null;

  await userApolloClient.updateNextQuestionId(nextQuestionId);

  return nextQuestionId;
};

export const generateNextQuestionForUser = async (
  request: Request,
  userId: string,
) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const nextQuestion = await adminApolloClient.getUserNextQuestion({ userId });
  const nextQuestionId = nextQuestion?.id ?? null;

  await adminApolloClient.updateNextQuestionId(nextQuestionId, {
    userId,
  });

  return nextQuestion;
};
