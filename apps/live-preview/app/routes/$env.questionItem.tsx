import { Suspense } from "react";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Entry } from "~/models/entry";
import { getQuestionItemFromRequest } from "~/models/entry/questionItem";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const { questionItemData } = await getQuestionItemFromRequest({
    request,
    params,
  });

  return json({ questionItemData });
};

export default function Env() {
  const { questionItemData } = useLoaderData<typeof loader>();

  return (
    <Suspense fallback={<></>}>
      <Entry entryData={questionItemData} />
    </Suspense>
  );
}
