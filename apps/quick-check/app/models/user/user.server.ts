import {
  getAdminApolloClientFromRequest,
  getOptionalUserApolloClientFromRequest,
  getUserApolloClientFromRequest,
} from "~/graphql"

import { remixI18next } from "~/utils/i18next.server"

export const getUserFromRequest = async (request: Request) => {
  try {
    const userApolloClient = await getUserApolloClientFromRequest(request)
    return await userApolloClient.getUser()
  } catch (error) {
    return null
  }
}

export const generateNextQuestionFromRequest = async (request: Request, currentQuestionId?: string) => {
  const userApolloClient = await getUserApolloClientFromRequest(request)

  const nextQuestion = await userApolloClient.getUserNextQuestion(currentQuestionId)
  const nextQuestionId = nextQuestion?.id ?? null

  await userApolloClient.updateNextQuestionId(nextQuestionId)

  return nextQuestionId
}

export const generateNextQuestionForUser = async (request: Request, userId: string, currentQuestionId?: string) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request)

  const nextQuestion = await adminApolloClient.getUserNextQuestion(currentQuestionId, { userId })
  const nextQuestionId = nextQuestion?.id ?? null

  adminApolloClient.updateNextQuestionId(nextQuestionId, {
    userId,
  })

  return nextQuestion
}

export const getUserConfig = async (request: Request) => {
  const userApolloClient = await getOptionalUserApolloClientFromRequest(request)

  const userConfig = await userApolloClient?.getUserTheme()

  return {
    theme: userConfig?.theme ?? null,
    locale: userConfig?.langauge || (await remixI18next.getLocale(request)),
  }
}
