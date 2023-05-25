import { redirect, type LoaderArgs } from "@remix-run/node";

import invariant from "tiny-invariant";
import { apolloClient } from "~/graphql";
import { requireUserSession } from "~/session.server";

import { isDevelopment } from "~/utils/server/envs.server";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    if (!isDevelopment) throw new Error("DEVELOPMENT ONLY");

    const userId = await requireUserSession(request);
    invariant(userId, "userId not found");

    await apolloClient.resetUser(userId);

    return redirect(`/nq`);
  } catch {
    return redirect(`/`);
  }
};
