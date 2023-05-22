import { redirect, type LoaderArgs } from "@remix-run/node";

import invariant from "tiny-invariant";
import { apolloClient } from "~/graphql";
import { createUserSession } from "~/session.server";

const invalidTokenRedirect = () => {
  const searchParams = new URLSearchParams({
    message: "The link you used has expired or is invalid.",
  });
  return redirect(`/?${searchParams.toString()}`);
};

export const loader = async ({ params, request }: LoaderArgs) => {
  try {
    const { cuid } = params;
    invariant(cuid, "cuid not found");

    const token = await apolloClient.getLinkToken(cuid);
    invariant(token, "token not found");

    const user = await apolloClient.getUser(token.user_id);
    invariant(user?.user_id, "user not found");
    invariant(user?.next_question_id, "next question not found");

    return createUserSession({
      redirectTo: `/q/${user.next_question_id}`,
      remember: true,
      request,
      userId: user.user_id,
    });
  } catch {
    return invalidTokenRedirect();
  }
};
