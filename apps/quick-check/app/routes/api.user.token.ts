import { LoaderFunctionArgs, type ActionFunctionArgs } from "@vercel/remix"

import { invariant, simpleErrorResponse } from "quickcheck-shared"

import { getAdminApolloClientFromRequest } from "~/graphql"

import { corsResponse } from "~/utils/cors"
import { getLoginUrl } from "~/utils/urls"

import { getUserSchema, verifyApiRequest } from "~/models/api"
import { getUserActiveToken } from "~/models/token"

export const config = {
  maxDuration: 300,
}

// Browser will send the options request so we need to handle options request with allow cors origin header.
export async function loader({ request }: LoaderFunctionArgs) {
  return await corsResponse(request, null, { status: 204 })
}

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request)

    verifyApiRequest(request)

    const body = await request.json()

    const userData = getUserSchema.parse(body)
    const user = await adminApolloClient.getUser(userData)

    invariant(user, `User not found for id: ${userData.userId}`)

    const token = await getUserActiveToken(request, {
      userId: user.user_id,
      tenantId: user.tenant_id,
    })

    const response = {
      id: user.user_id,
      token: token.id,
      loginUrl: getLoginUrl(token.id, request),
      questionsAvailable: 0, //TODO: find the user's unanswered question count
    }

    return await corsResponse(request, response)
  } catch (error) {
    return simpleErrorResponse(error)
  }
}
