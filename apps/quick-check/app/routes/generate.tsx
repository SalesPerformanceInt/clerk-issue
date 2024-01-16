import { json, type LoaderFunctionArgs } from "@remix-run/node";

import { generateTokenAndSendSMS } from "~/notifications/twilio.server";

import { getAdminApolloClientFromRequest } from "~/graphql";

export const config = {
  maxDuration: 300,
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);
    const users = (await adminApolloClient.getAllUsers()) ?? [];

    const tokens = await Promise.all(
      users.map((user) => generateTokenAndSendSMS(user, request)),
    );

    return json({ tokens }, { status: 200 });
  } catch (error) {
    return json({ error, tokens: null }, { status: 500 });
  }
};

export default function Page() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-blue-600 p-8">
      <h1 className="text-7xl">👍</h1>
    </div>
  );
}
