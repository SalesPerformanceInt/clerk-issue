import { redirect, type LoaderArgs } from "@remix-run/node";

import { apolloClient } from "~/graphql";
import { requireUserSession } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const userId = await requireUserSession(request);

    await apolloClient.resetUser(userId);

    return redirect(`/nq`);
  } catch {
    return redirect(`/`);
  }
};
