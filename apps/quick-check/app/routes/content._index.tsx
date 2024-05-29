import { redirect, type LoaderFunctionArgs } from "@vercel/remix"

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return redirect("/content/en-us/courses")
}
