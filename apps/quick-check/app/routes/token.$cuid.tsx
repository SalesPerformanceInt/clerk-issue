import { waitUntil } from "@vercel/functions"
import { redirect, type LoaderFunctionArgs } from "@vercel/remix"

import { invariant, logError } from "quickcheck-shared"

import { getAdminApolloClientFromRequest, getUnauthenticatedApolloClient } from "~/graphql"

import { sendNotification } from "~/models/notification/notificationSender"
import { createUserSession, getAdminDataFromFromSession, getSession, SessionKeys } from "~/models/session"

const invalidTokenRedirect = () => {
  const searchParams = new URLSearchParams({
    message: "The link you used has expired or is invalid.",
  })
  return redirect(`/?${searchParams.toString()}`)
}

export const config = {
  maxDuration: 300,
}

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  try {
    const { cuid } = params
    invariant(cuid, "cuid not found")

    const unauthenticatedApolloClient = await getUnauthenticatedApolloClient(cuid)
    const token = await unauthenticatedApolloClient.getLinkToken(cuid)

    invariant(token, "token not found")

    const searchParams = new URL(request.url).searchParams
    const path = searchParams.get("p")

    const redirectTo = path ?? "/next-question"

    const adminApolloClient = await getAdminApolloClientFromRequest(request)
    waitUntil(
      adminApolloClient.createEvent(
        {
          type: "Authenticated",
          data: {
            token: token.id,
          },
        },
        { userId: token.user_id, tenantId: token.tenant_id },
      ),
    )

    if (!token.active) {
      if (request.method === "GET") {
        const [now] = await getAdminDataFromFromSession(request)

        await sendNotification({
          now,
          request,
          userId: token.user_id,
          template: {
            notificationType: "RequestedLink",
          },
        })
      }
      return redirect("/login?expired=true")
    }

    const session = await getSession(request)

    const userId = session.get(SessionKeys.USER_ID)
    const tenantId = session.get(SessionKeys.TENANT_ID)

    if (userId === token.user_id && tenantId === token.tenant_id) {
      return redirect(redirectTo)
    }

    return createUserSession({
      redirectTo,
      remember: true,
      request,
      userId: token.user_id,
      tenantId: token.tenant_id,
    })
  } catch (error) {
    logError({ error, log: "/token/$cuid" })
    return invalidTokenRedirect()
  }
}
