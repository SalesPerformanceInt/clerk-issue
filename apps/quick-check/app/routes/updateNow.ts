import type { ActionFunctionArgs } from "@remix-run/node";

import { isString } from "remeda";

import { invariant, logError, simpleErrorResponse } from "quickcheck-shared";

import { updateSessionNow } from "~/models/session";

export const config = {
  maxDuration: 300,
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const data = await request.formData();

    const searchParams = new URL(request.url).searchParams;
    const returnPath = searchParams.get("redirectTo");

    const now = data.get("now");
    invariant(isString(now), "Missing updated now");

    const redirectTo = returnPath ?? "/dashboard";

    return await updateSessionNow(request, redirectTo, now);
  } catch (error) {
    logError({ error, log: "/updateNow" });
    return simpleErrorResponse(error);
  }
};
