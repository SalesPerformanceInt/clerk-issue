import type { FC } from "react";

import { defer, type LoaderArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";

import { deserialize, serialize } from "remix-typedjson";

import {
  getOptionalUserApolloClientFromRequest,
  type DashboardData,
} from "~/graphql";

import { getUserLeaderboard } from "~/models/leaderboard";

import { Dashboard } from "~/pages";

import { AccelerateButton } from "~/components";

/**
 * Loader
 */

export const loader = async ({ request }: LoaderArgs) => {
  const userApolloClient =
    await getOptionalUserApolloClientFromRequest(request);

  const dashboard = await userApolloClient?.getUserDashboard();

  if (!dashboard) return null;

  const userLeaderboard = getUserLeaderboard(request, dashboard);

  return defer({
    dashboard: serialize(dashboard),
    userLeaderboard,
  });
};

/**
 * Route Component
 */

const LogIn: FC<{ message: string | null }> = ({ message }) => (
  <div className="flex h-full flex-col items-center justify-center space-y-4">
    {message && <p className="text-sm text-white">{message}</p>}

    <AccelerateButton />
  </div>
);

export default function Index() {
  const data = useLoaderData<typeof loader>();

  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");

  if (!data) return <LogIn message={message} />;

  const dashboard = deserialize<DashboardData>(data.dashboard)!;
  const { userLeaderboard } = data;

  return <Dashboard dashboard={dashboard} userLeaderboard={userLeaderboard} />;
}
