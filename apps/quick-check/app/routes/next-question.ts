import { redirect, type LoaderFunctionArgs } from "@vercel/remix"

import { invariant } from "quickcheck-shared"

import { generateNextQuestionFromRequest } from "~/models/user"

export const config = {
  maxDuration: 300,
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const nextQuestionId = await generateNextQuestionFromRequest(request)

    invariant(nextQuestionId, "next question not found")

    return redirect(`/question/${nextQuestionId}`)
  } catch (error) {
    return redirect(`/`)
  }
}
