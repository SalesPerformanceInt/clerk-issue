import { redirect, type LoaderArgs } from "@remix-run/node";

import { invariant, logError } from "quickcheck-shared";

import { generateNextQuestionFromRequest } from "~/models/user";

export const config = {
  maxDuration: 300,
};

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const nextQuestionId = await generateNextQuestionFromRequest(request);

    invariant(nextQuestionId, "next question not found");

    return redirect(`/question/${nextQuestionId}`);
  } catch (error) {
    logError({ error, log: "/next-question" });
    return redirect(`/`);
  }
};
