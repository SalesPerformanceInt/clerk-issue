import { redirect, type LoaderArgs } from "@remix-run/node";

import invariant from "tiny-invariant";
import { getUserApolloClientFromRequest } from "~/graphql";

import { generateNextQuestionFromRequest } from "~/models/user";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const userApolloClient = await getUserApolloClientFromRequest(request);

    const user = await userApolloClient.getUser();

    const nextQuestionId =
      user?.next_question?.id ??
      (await generateNextQuestionFromRequest(request));

    invariant(nextQuestionId, "next question not found");

    return redirect(`/q/${nextQuestionId}`);
  } catch {
    return redirect(`/`);
  }
};
