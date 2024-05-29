import { useLoaderData, useSubmit } from "@remix-run/react"
import { json, redirectDocument, type ActionFunctionArgs, type LoaderFunctionArgs } from "@vercel/remix"

import { logError } from "quickcheck-shared"

import { QC_ADMIN_SECRET, QC_ENV } from "~/utils/envs.server"
import { useEffectOnce } from "~/utils/useEffectOnce"

import { createAdminSession, getAdminDataFromFromSession } from "~/models/session"

export const config = {
  maxDuration: 300,
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URL(request.url).searchParams
  const redirectTo = searchParams.get("redirectTo") ?? "/admin"

  if (QC_ENV === "development") {
    const [now] = await getAdminDataFromFromSession(request)

    return createAdminSession({
      request,
      redirectTo,
      remember: true,
      admin: true,
      now,
    })
  }

  return json({ redirectTo }, { status: 200 })
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()

  const adminAuth = formData.get("adminAuth") ?? ""
  const redirectTo = (formData.get("redirectTo") ?? "/admin") as string

  try {
    const [now] = await getAdminDataFromFromSession(request)

    if (adminAuth !== QC_ADMIN_SECRET) throw new Error("Invalid admin password")

    return createAdminSession({
      request,
      redirectTo,
      remember: true,
      admin: true,
      now,
    })
  } catch (error) {
    logError({ error })

    return redirectDocument(`/admin/auth?redirectTo=${redirectTo}`)
  }
}

export default function Page() {
  const { redirectTo } = useLoaderData<typeof loader>()

  const submit = useSubmit()

  useEffectOnce(() => {
    const adminAuth = window.prompt("Admin Password:")

    if (adminAuth) {
      const formData = new FormData()
      formData.append("adminAuth", adminAuth)
      formData.append("redirectTo", redirectTo)

      submit(formData, { method: "POST" })
    }
  })
}
