import type { ActionArgs } from "@remix-run/node";

import invariant from "tiny-invariant";

import { updateSessionNow } from "~/models/session";

export const action = async ({ request }: ActionArgs) => {
  const data = await request.formData();

  const searchParams = new URL(request.url).searchParams;
  const returnPath = searchParams.get("redirectTo");

  const now = data.get("now") as string;
  invariant(now, "Missing updated now");

  const redirectTo = returnPath ?? "/nq";

  return updateSessionNow(request, redirectTo, now);
};