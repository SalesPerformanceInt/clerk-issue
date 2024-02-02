import { redirect, type LoaderFunctionArgs } from "@remix-run/node";

import { invariant, logError } from "quickcheck-shared";

import { sendEmailTemplate } from "~/utils/email/sendEmailTemplate.server";

import { getSession, SessionKeys } from "~/models/session";

export const config = {
  maxDuration: 300,
};

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  try {
    const { userId } = params;
    invariant(userId, "Missing User ID");

    const searchParams = new URL(request.url).searchParams;
    const returnPath = searchParams.get("redirectTo");
    const redirectTo = returnPath ?? "/dashboard";

    const session = await getSession(request);
    const now = session.get(SessionKeys.NOW);

    sendEmailTemplate(request, userId, now);

    return redirect(redirectTo);
  } catch (error) {
    logError({ error, log: "/email.user.$userId" });
    return redirect(`/`);
  }
};
