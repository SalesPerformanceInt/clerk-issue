import {
  getAdminApolloClient,
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

  const nextQuestionId = nextQuestion?.id;

  await userApolloClient.updateNextQuestionId(nextQuestionId);

  return nextQuestionId;
};

export const generateNextQuestionForUser = async (userId: string) => {
  const adminApolloClient = getAdminApolloClient();
  const nextQuestion = await adminApolloClient.getUserNextQuestion(userId);

  await adminApolloClient.updateNextQuestionId(userId, nextQuestion?.id);

  return nextQuestion;
};
