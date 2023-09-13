import { defer, type LoaderArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";

import { deserialize, serialize } from "remix-typedjson";
import invariant from "tiny-invariant";

import {
  getAdminApolloClient,
  getOptionalUserApolloClientFromRequest,
  type DashboardData,
  type EnrollmentsRanking,
} from "~/graphql";

import { Dashboard } from "~/pages";

import { AccelerateButton } from "~/components";

/**
 * Loader
 */

export const loader = async ({ request }: LoaderArgs) => {
  const adminApolloClient = getAdminApolloClient();
  const userApolloClient =
    await getOptionalUserApolloClientFromRequest(request);

  const dashboard = await userApolloClient?.getUserDashboard();

  invariant(dashboard, "Dashboard data could not be loaded");

  const enrollmentsRanking = adminApolloClient.getUserEnrollmentScores(
    dashboard?.user_id,
    dashboard?.taxonomy_ids,
    dashboard?.tenant_id,
  );

  return defer({
    dashboard: serialize(dashboard),
    enrollmentsRanking,
  });
};

/**
 * Route Component
 */

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();

  const dashboard = deserialize<DashboardData>(data.dashboard);
  const enrollmentsRanking =
    data.enrollmentsRanking as unknown as Promise<EnrollmentsRanking>;

  const message = searchParams.get("message");

  return dashboard ? (
    <Dashboard dashboard={dashboard} enrollmentsRanking={enrollmentsRanking} />
  ) : (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      {message && <p className="text-sm text-white">{message}</p>}

      <AccelerateButton />
    </div>
  );
}
