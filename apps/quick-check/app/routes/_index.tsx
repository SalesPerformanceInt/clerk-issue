import { type LoaderArgs } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";

import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { getOptionalUserApolloClientFromRequest } from "~/graphql";
import { Dashboard } from "~/pages";

import { AccelerateButton } from "~/components";

export const loader = async ({ request }: LoaderArgs) => {
  const userApolloClient =
    await getOptionalUserApolloClientFromRequest(request);
  const dashboard = await userApolloClient?.getUserDashboard();

  return typedjson({ dashboard });
};

export default function Index() {
  const { dashboard } = useTypedLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();

  const message = searchParams.get("message");

  return dashboard ? (
    <Dashboard dashboard={dashboard} />
  ) : (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      {message && <p className="text-sm text-white">{message}</p>}
      <AccelerateButton />
    </div>
  );
}
