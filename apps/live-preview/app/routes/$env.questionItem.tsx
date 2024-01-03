import { Suspense } from "react";
import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Entry } from "~/models/entry";
import { getQuestionItemFromRequest } from "~/models/entry/questionItem";

export const loader = async ({ request, params }: LoaderArgs) => {
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
