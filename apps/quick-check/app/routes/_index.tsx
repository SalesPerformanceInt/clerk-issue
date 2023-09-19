import type { FC } from "react";

import { defer, type LoaderArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";

import { deserialize, serialize } from "remix-typedjson";

import {
  getAdminApolloClient,
  getOptionalUserApolloClientFromRequest,
  type DashboardData,
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

  if (!dashboard) return null;

  const rankedUserEnrollments = adminApolloClient.getRankedUserEnrollments(
    dashboard.taxonomy_ids,
    dashboard.user_id,
    dashboard.tenant_id,
  );

  return defer({
    dashboard: serialize(dashboard),
    rankedUserEnrollments,
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
  const rankedUserEnrollments = data.rankedUserEnrollments;

  return (
    <Dashboard
      dashboard={dashboard}
      rankedUserEnrollments={rankedUserEnrollments}
    />
  );
}
