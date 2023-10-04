import { defer, redirect, type LoaderArgs } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";

import { getUserDataFromFromSession } from "~/session.server";

import { AccelerateButton } from "~/components";

export const loader = async ({ request }: LoaderArgs) => {
  const [userId] = await getUserDataFromFromSession(request);

  if (userId) return redirect("/dashboard");
  return null;
};

export default function Index() {
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      {message && <p className="text-sm text-white">{message}</p>}

      <AccelerateButton />
    </div>
  );
}
