import { redirect, type LoaderArgs } from "@remix-run/node";

import invariant from "tiny-invariant";
import { getUserApolloClientFromRequest } from "~/graphql";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const userApolloClient = await getUserApolloClientFromRequest(request);

    const user = await userApolloClient.getUser();
    invariant(user?.next_question_id, "next question not found");

    return redirect(`/q/${user.next_question_id}`);
  } catch {
    return redirect(`/break`);
  }
};
