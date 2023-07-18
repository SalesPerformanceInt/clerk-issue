import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";

import { Dashboard } from "~/pages";

import { getUserFromRequest } from "~/models/user";

import { AccelerateButton } from "~/components";

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUserFromRequest(request);

  return json({ user });
};

export default function Index() {
  const { user } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();

  const message = searchParams.get("message");

  return user ? (
    <Dashboard user={user} />
  ) : (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      {message && <p className="text-sm text-white">{message}</p>}
      <AccelerateButton />
    </div>
  );
}
