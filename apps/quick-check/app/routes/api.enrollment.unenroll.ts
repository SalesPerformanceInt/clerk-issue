import { json, type ActionFunctionArgs } from "@vercel/remix"

import { invariant, simpleErrorResponse } from "quickcheck-shared"

import { getAdminApolloClientFromRequest } from "~/graphql"

import { unenrollEnrollmentSchema, verifyApiRequest } from "~/models/api"

export const config = {
  maxDuration: 300,
}

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request)

    verifyApiRequest(request)

    const body = await request.json()

    const unenrollEnrollmentData = unenrollEnrollmentSchema.parse(body)

    const { user_id, enrollment_id } = unenrollEnrollmentData

    const user = adminApolloClient.unenrollUser(enrollment_id, {
      userId: user_id,
    })

    invariant(user, "Unenrollment failed")

    return json(unenrollEnrollmentData, { status: 200 })
  } catch (error) {
    return simpleErrorResponse(error)
  }
}
