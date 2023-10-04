import { redirect, type LoaderArgs } from "@remix-run/node";

import { requireUserSession } from "~/session.server";

import { getUserApolloClientFromRequest } from "~/graphql";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    await requireUserSession(request);
    const userApolloClient = await getUserApolloClientFromRequest(request);
    await userApolloClient.resetUser();

    return redirect(`/next-question`);
  } catch {
    return redirect(`/`);
  }
};
