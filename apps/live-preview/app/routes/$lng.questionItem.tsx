import { Suspense } from "react"
import { json, type LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { useChangeLanguage } from "remix-i18next"

import { Entry } from "~/models/entry"
import { getQuestionItemFromRequest } from "~/models/entry/questionItem"

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const { questionItemData } = await getQuestionItemFromRequest({
    request,
    params,
  })

  return json({ questionItemData, lng: params.lng || "en-us" })
}

export default function Env() {
  const { questionItemData, lng } = useLoaderData<typeof loader>()

  useChangeLanguage(lng)

  return (
    <Suspense fallback={<></>}>
      <Entry entryData={questionItemData} />
    </Suspense>
  )
}
