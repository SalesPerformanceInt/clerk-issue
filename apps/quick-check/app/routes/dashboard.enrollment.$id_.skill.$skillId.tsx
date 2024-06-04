import type { LoaderFunctionArgs } from "@vercel/remix"

import { redirect, typeddefer, useTypedLoaderData } from "remix-typedjson"

import { invariant } from "quickcheck-shared"

import { getEnrollmentSkillDashboard } from "~/models/dashboard/enrollmentSkillDashboard.server"

import { EnrollmentSkillDashboard } from "~/pages/EnrollmentSkillDashboard"

export const config = {
  maxDuration: 300,
}

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  try {
    const { id: enrollmentId, skillId } = params
    invariant(enrollmentId, "Enrollment ID not found")
    invariant(skillId, "Skill ID not found")

    const enrollmentSkillDashboard = await getEnrollmentSkillDashboard(request, { enrollmentId, skillId })

    return typeddefer({ ...enrollmentSkillDashboard })
  } catch (error) {
    throw redirect("/")
  }
}

export default function UserEnrollmentSkillPage() {
  const { enrollmentSkillDashboardData, ...enrollmentSkillDashboard } = useTypedLoaderData<typeof loader>()

  if (!enrollmentSkillDashboardData) return redirect("/login")

  return (
    <EnrollmentSkillDashboard
      enrollmentSkillDashboard={{
        enrollmentSkillDashboardData,
        ...enrollmentSkillDashboard,
      }}
    />
  )
}
