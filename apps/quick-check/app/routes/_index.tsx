import { json, type LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData, type V2_MetaFunction } from "@remix-run/react";

import { contentStackGraphQLClient } from "~/utils/server/apollo.server";

export const loader = async ({ request }: LoaderArgs) => {
  const questionItems = await contentStackGraphQLClient.getAllQuestionItems();
  const questionItem = await contentStackGraphQLClient.getQuestionItem(
    "blt9babc1c5d666bcb9",
  );

  return json({ questionItems, questionItem });
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "Quick Check" }];
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  console.log("_index.tsx", data);

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-white">
      <div className="relative pb-16 pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            to="/czi8gz2p3q"
            className="flex items-center justify-center rounded-md bg-red-500 px-4 py-3 font-medium text-white hover:bg-red-600"
          >
            /czi8gz2p3q
          </Link>
        </div>
      </div>
    </main>
  );
}
