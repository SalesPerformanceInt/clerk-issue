import { json, type ActionFunctionArgs } from "@vercel/remix"

import { invariant, simpleErrorResponse } from "quickcheck-shared"

import { getAdminApolloClientFromRequest } from "~/graphql"

import { formatUserInputFromImport, inputEnrollmentSchema, verifyApiRequest } from "~/models/api"
import { handleUserEnrollment } from "~/models/enrollment"

export const config = {
  maxDuration: 300,
}

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request)

    verifyApiRequest(request)

    const body = await request.json()

    const importEnrollmentData = inputEnrollmentSchema.parse(body)

    const [userInputData, proxyData] = formatUserInputFromImport(importEnrollmentData.user)

    const user = await adminApolloClient.upsertUser(userInputData, proxyData)

    invariant(user, () => `User not returned from upsertUser ${JSON.stringify(userInputData)}`)

    const { cms_topic_id, user: _enrollmentUser, ...enrollmentNewData } = importEnrollmentData

    const enrollmentActionResponse = await handleUserEnrollment({
      request,
      user: { userId: user.user_id, tenantId: user.tenant_id },
      enrollmentNewData,
      taxonomyId: cms_topic_id,
    })

    invariant(
      enrollmentActionResponse,
      () =>
        `Enrollment sync failed from handleUserEnrollment ${JSON.stringify({
          user: { userId: user.user_id, tenantId: user.tenant_id },
          taxonomyId: cms_topic_id,
          enrollmentData: enrollmentNewData,
        })}`,
    )

    const { status, ...apiResponse } = enrollmentActionResponse

    return json(apiResponse, { status })
  } catch (error) {
    return simpleErrorResponse(error)
  }
}
