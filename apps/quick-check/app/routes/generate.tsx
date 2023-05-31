import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { compact, first, map, pipe } from "remeda";
import invariant from "tiny-invariant";
import { apolloClient, type UserWithActiveTokenFragment } from "~/graphql";
import { sendTwilioMessage } from "~/notifications/twilio.server";

const generateTokenMessage = (
  user: UserWithActiveTokenFragment,
  origin: string,
) => {
  const activeToken = first(user.active_tokens);

  invariant(activeToken, "No active token");

  const message = `Hey there ${user.first_name}, your next question is available at ${origin}/t/${activeToken.id}`;
  return message;
};

export const loader = async ({ request }: LoaderArgs) => {
  const { origin } = new URL(request.url);

  try {
    const users = (await apolloClient.getAllUsers()) ?? [];

    const tokens = await Promise.all(
      users.map(async (user) => {
        const token = await apolloClient.generateNewToken(user.user_id);
        const message = generateTokenMessage(user, origin);
        await sendTwilioMessage(user, message);
        return token;
      }),
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
