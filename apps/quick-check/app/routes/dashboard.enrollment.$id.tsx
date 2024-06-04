import type { LoaderFunctionArgs } from "@vercel/remix"

import { redirect, typeddefer, useTypedLoaderData } from "remix-typedjson"

import { invariant } from "quickcheck-shared"

import { getEnrollmentDashboard } from "~/models/dashboard/enrollmentDashboard.server"

import { EnrollmentDashboard } from "~/pages/EnrollmentDashboard"

export const config = {
  maxDuration: 300,
}

/**
 * Loader
 */

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  try {
    const { id: enrollmentId } = params
    invariant(enrollmentId, "Enrollment ID not found")

    const enrollmentDashboard = await getEnrollmentDashboard({ request, enrollmentId })

    return typeddefer({ ...enrollmentDashboard })
  } catch (error) {
    throw redirect("/")
  }
}

/**
 * Route Component
 */

export default function EnrollmentDashboardPage() {
  const enrollmentDashboard = useTypedLoaderData<typeof loader>()

  return <EnrollmentDashboard enrollmentDashboard={enrollmentDashboard} />
}
