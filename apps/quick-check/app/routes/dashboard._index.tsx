import { defer, redirect, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { deserialize, serialize } from "remix-typedjson";

import { simpleErrorResponse } from "quickcheck-shared";

import {
  getOptionalUserApolloClientFromRequest,
  type DashboardData,
} from "~/graphql";

import { Dashboard } from "~/pages";

/**
 * Loader
 */

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const userApolloClient =
      await getOptionalUserApolloClientFromRequest(request);

    const dashboard = await userApolloClient?.getUserDashboard();
    if (!dashboard) return redirect("/login");

    return defer({
      dashboard: serialize(dashboard),
    });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};

/**
 * Route Component
 */

export default function Page() {
  const data = useLoaderData<typeof loader>();

  if (!("dashboard" in data)) return redirect("/login");

  const dashboard = deserialize<DashboardData>(data.dashboard)!;

  return <Dashboard dashboard={dashboard} />;
}
