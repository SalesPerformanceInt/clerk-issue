import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { apolloClient } from "~/graphql";
import { generateTokenAndSendSMS } from "~/notifications/twilio.server";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const users = (await apolloClient.getAllUsers()) ?? [];

    const tokens = await Promise.all(
      users.map((user) => generateTokenAndSendSMS(user, request)),
    );

    return json({ tokens }, { status: 200 });
  } catch (error) {
    return json({ error, tokens: null }, { status: 500 });
  }
};

export default function Page() {
  const { tokens } = useLoaderData<typeof loader>();

  console.log(tokens);

  return (
    <div className="flex h-full w-full items-center justify-center bg-blue-600 p-8">
      <h1 className="text-7xl">👍</h1>
    </div>
  );
}
