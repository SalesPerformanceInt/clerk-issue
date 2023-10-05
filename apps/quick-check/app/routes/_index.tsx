import { redirect, type LoaderArgs } from "@remix-run/node";

import { getUserDataFromFromSession } from "~/models/session";

export const loader = async ({ request }: LoaderArgs) => {
  const [_, userId] = await getUserDataFromFromSession(request);

  if (userId) return redirect("/dashboard");

  return redirect("/login");
};
