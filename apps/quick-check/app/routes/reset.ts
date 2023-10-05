import { redirect, type LoaderArgs } from "@remix-run/node";

import { getUserApolloClientFromRequest } from "~/graphql";

import { requireUserSession } from "~/models/session";

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
