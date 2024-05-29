import { redirect, type LoaderFunctionArgs } from "@vercel/remix"

import { typedjson, useTypedLoaderData } from "remix-typedjson"

import { invariant } from "quickcheck-shared"

import { getUserApolloClientFromRequest } from "~/graphql"

import { getEnrollmentLeaderboard } from "~/models/leaderboard"
import { requireUserSession } from "~/models/session"

import { Enrollment } from "~/pages/Enrollment"

export const config = {
  maxDuration: 300,
}

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  try {
    await requireUserSession(request)

    const { id } = params
    invariant(id, "ID not found")

    const userApolloClient = await getUserApolloClientFromRequest(request)

    const enrollment = await userApolloClient.getUserEnrollment(id)
    invariant(enrollment, "user enrollment not found")

    const enrollmentLeaderboard = await getEnrollmentLeaderboard(request, enrollment)

    return typedjson({ enrollment, enrollmentLeaderboard })
  } catch (error) {
    throw redirect("/")
  }
}

export default function UserEnrollmentPage() {
  const { enrollment, enrollmentLeaderboard } = useTypedLoaderData<typeof loader>()

  return <Enrollment enrollment={enrollment} leaderboard={enrollmentLeaderboard} />
}
