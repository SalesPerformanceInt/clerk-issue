import { defer, redirect, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { deserialize, serialize } from "remix-typedjson";

import {
  getOptionalUserApolloClientFromRequest,
  type DashboardData,
} from "~/graphql";

import { getUserLeaderboard } from "~/models/leaderboard";

import { Dashboard } from "~/pages";

/**
 * Loader
 */

export const loader = async ({ request }: LoaderArgs) => {
  const userApolloClient =
    await getOptionalUserApolloClientFromRequest(request);

  const dashboard = await userApolloClient?.getUserDashboard();
  if (!dashboard) return redirect("/login");

  const userLeaderboard = getUserLeaderboard(request, dashboard);
  if (!userLeaderboard) return redirect("/login");

  return defer({
    dashboard: serialize(dashboard),
    userLeaderboard,
  });
};

/**
 * Route Component
 */

export default function Page() {
  const data = useLoaderData<typeof loader>();

  if (!("dashboard" in data)) return redirect("/login");

  const dashboard = deserialize<DashboardData>(data.dashboard)!;
  const { userLeaderboard } = data;

  return <Dashboard dashboard={dashboard} userLeaderboard={userLeaderboard} />;
}
