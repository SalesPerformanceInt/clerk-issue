import { redirect, type LoaderArgs } from "@remix-run/node";

import invariant from "tiny-invariant";

import { getUnauthenticatedApolloClient } from "~/graphql";

import { updateSessionNow } from "~/models/session";

const invalidTokenRedirect = () => {
  const searchParams = new URLSearchParams({
    message: "The link you used has expired or is invalid.",
  });
  return redirect(`/?${searchParams.toString()}`);
};

export const loader = async ({ params, request }: LoaderArgs) => {
  try {
    const searchParams = new URL(request.url).searchParams;
    const returnPath = searchParams.get("redirectTo");

    const now = searchParams.get("now");
    invariant(now, "Missing updated now");

    const redirectTo = returnPath ?? "/nq";

    return updateSessionNow(request, redirectTo, now);
  } catch {
    return invalidTokenRedirect();
  }
};
