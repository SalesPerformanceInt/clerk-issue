import { json, type ActionFunctionArgs } from "@vercel/remix"

import { invariant, simpleErrorResponse } from "quickcheck-shared"

import { sendNotification } from "~/models/notification/notificationSender"

export const config = {
  maxDuration: 300,
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
  try {
    const { userId } = params
    invariant(userId, "Missing User ID")

    const result = await sendNotification({ request, userId })

    return json({ userId, ...result })
  } catch (error) {
    return simpleErrorResponse(error)
  }
}
