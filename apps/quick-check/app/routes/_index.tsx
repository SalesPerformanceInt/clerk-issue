import { defer, type LoaderArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";

import { deserialize, serialize } from "remix-typedjson";

import {
  getOptionalUserApolloClientFromRequest,
  type DashboardData,
} from "~/graphql";

import { Dashboard } from "~/pages";

import { AccelerateButton } from "~/components";

/**
 * Loader
 */

let count = 0;
const doSomethingElse = new Promise<string>((res) =>
  setTimeout(() => res("something else"), 5000),
);

export const loader = async ({ request }: LoaderArgs) => {
  const userApolloClient =
    await getOptionalUserApolloClientFromRequest(request);

  const dashboard = await userApolloClient?.getUserDashboard();

  return defer({
    serializedDashboard: serialize(dashboard),
    somethingElse: doSomethingElse,
  });
};

/**
 * Route Component
 */

export default function Index() {
  const { serializedDashboard, somethingElse } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();

  const dashboard = deserialize<DashboardData>(serializedDashboard);

  const message = searchParams.get("message");

  return dashboard ? (
    <Dashboard dashboard={dashboard} somethingElse={somethingElse} />
  ) : (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      {message && <p className="text-sm text-white">{message}</p>}

      <AccelerateButton />
    </div>
  );
}
