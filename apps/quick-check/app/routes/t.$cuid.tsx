import { redirect, type LoaderArgs } from "@remix-run/node";

import invariant from "tiny-invariant";
import { getUnauthenticatedApolloClient } from "~/graphql";
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

    const unauthenticatedApolloClient = await getUnauthenticatedApolloClient(
      cuid,
    );
    const token = await unauthenticatedApolloClient.getLinkToken(cuid);
    invariant(token, "token not found");
    invariant(token.active, "token expired");

    return createUserSession({
      redirectTo: "/nq",
      remember: true,
      request,
      userId: token.user_id,
      tenantId: token.tenant_id,
    });
  } catch {
    return invalidTokenRedirect();
  }
};
