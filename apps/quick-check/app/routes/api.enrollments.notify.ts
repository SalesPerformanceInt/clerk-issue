import { json, type LoaderFunctionArgs } from "@vercel/remix"

import { simpleErrorResponse } from "quickcheck-shared"

import { getAdminApolloClientFromRequest } from "~/graphql"

import { completeEnrollmentAndNotify } from "~/models/enrollment/actions/completeEnrollmentAndNotify"

export const config = {
  maxDuration: 300,
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request)
    const { completedEnrollments } = await adminApolloClient.getNotificationEnrollments()

    const completedEnrollmentEmails =
      completedEnrollments?.map(async (enrollment) => completeEnrollmentAndNotify(request, enrollment)) ?? []

    await Promise.all([...completedEnrollmentEmails])

    return json({ completedEnrollments })
  } catch (error) {
    return simpleErrorResponse(error)
  }
}
