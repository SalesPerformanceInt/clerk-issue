import { redirect, type LoaderArgs } from "@remix-run/node";

import invariant from "tiny-invariant";
import { apolloClient } from "~/graphql";
import { requireUserSession } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const userId = await requireUserSession(request);
    invariant(userId, "userId not found");

    const user = await apolloClient.getUser(userId);
    invariant(user?.user_id, "user not found");
    invariant(user?.next_question_id, "next question not found");

    return redirect(`/q/${user.next_question_id}`);
  } catch {
    return redirect(`/break`);
  }
};
