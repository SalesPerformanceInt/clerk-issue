import { json, type ActionFunctionArgs } from "@vercel/remix"

import { z } from "zod"

import { invariant, simpleErrorResponse } from "quickcheck-shared"

import { verifyApiRequest } from "~/models/api"
import { getUserEnrollment } from "~/models/enrollment"
import { getEnrollmentSkills } from "~/models/enrollment/handlers/getEnrollmentSkills"

const teamsSchema = z.object({
  enrollmentId: z.string().uuid(),
  accountSubdomain: z.string(),
})

export const config = {
  maxDuration: 300,
}

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    verifyApiRequest(request)

    const body = await request.json()

    const { enrollmentId, accountSubdomain } = teamsSchema.parse(body)

    const enrollment = await getUserEnrollment({ request, enrollmentId })

    invariant(enrollment, "Error fetching enrollment")

    invariant(enrollment?.user.tenant_id === accountSubdomain, "Invalid account subdomain")

    const skills = getEnrollmentSkills(enrollment.user_questions)

    return json({ skills })
  } catch (error) {
    return simpleErrorResponse(error)
  }
}
