import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { AccelerateButton } from "~/components";

/**
 * Loader
 */

export const loader = async ({ request }: LoaderArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const message = searchParams.get("message");

  return json({ message });
};

/**
 * Route Component
 */

export default function Page() {
  const { message } = useLoaderData<typeof loader>();

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <AccelerateButton tenantId="rsp" />
    </div>
  );
}
