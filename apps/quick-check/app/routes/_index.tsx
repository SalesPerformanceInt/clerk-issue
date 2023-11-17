import { redirect, type LoaderArgs } from "@remix-run/node";

import { getUserDataFromSession } from "~/models/session";

export const loader = async ({ request }: LoaderArgs) => {
  const [_, userId] = await getUserDataFromSession(request);

  if (userId) return redirect("/dashboard");

  return redirect("/login");
};
