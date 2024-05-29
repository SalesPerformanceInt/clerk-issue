import { redirect, type LoaderFunctionArgs } from "@vercel/remix"

import { getUserDataFromSession } from "~/models/session"

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const [_, userId] = await getUserDataFromSession(request)

  if (userId) return redirect("/dashboard")

  return redirect("/login")
}
