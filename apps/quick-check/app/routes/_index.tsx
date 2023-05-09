import { json, type LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData, type V2_MetaFunction } from "@remix-run/react";

import { contentStack } from "~/contentstack.server";
import { apolloClient } from "~/graphql";

export const loader = async ({ request }: LoaderArgs) => {
  // const questionItems = await contentStack.getAllQuestionItems();
  const questionItem = await contentStack.getQuestionItem(
    "blt9babc1c5d666bcb9",
  );

  const linkToken = await apolloClient.getLinkToken("b777d1541630");
  const user = await apolloClient.getUser(
    "d61afea6-bdbb-4b66-93d9-377d4c06cc29",
  );

  return json({ questionItem, linkToken, user });
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "Quick Check" }];
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  console.log("data", data);

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-white">
      <div className="relative pb-16 pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            to="t/b777d1541630"
            className="flex items-center justify-center rounded-md bg-red-500 px-4 py-3 font-medium text-white hover:bg-red-600"
          >
            t/b777d1541630
          </Link>
        </div>
      </div>
    </main>
  );
}
