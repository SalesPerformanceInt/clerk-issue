import { type LoaderArgs } from "@remix-run/node";

import { redirect, typeddefer, useTypedLoaderData } from "remix-typedjson";

import { getUserDashboard } from "~/models/userDashboard";

import { UserDashboard } from "~/pages";

export const config = {
  maxDuration: 300,
};

/**
 * Loader
 */

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const userDashboard = await getUserDashboard(request);

    return typeddefer({ ...userDashboard });
  } catch (error) {
    throw redirect("/login", { status: 500 });
  }
};

/**
 * Route Component
 */

export default function Page() {
  const { userDashboardData, ...userDashboard } =
    useTypedLoaderData<typeof loader>();

  if (!userDashboardData) return redirect("/login");

  return (
    <UserDashboard userDashboard={{ userDashboardData, ...userDashboard }} />
  );
}
