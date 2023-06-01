import { json, type LoaderArgs } from "@remix-run/node";
import {
  useLoaderData,
  useNavigate,
  useSearchParams,
  type V2_MetaFunction,
} from "@remix-run/react";

import { Button, PageLayout } from "accelerate-learner-ui";
import hamburger from "~/images/hamburger.png";
import dashboardLogo from "~/images/qc_dashboard.png";
import { getUserFromSession } from "~/session.server";

import { AccelerateButton } from "~/components";

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUserFromSession(request);

  return json({ user });
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "Quick Check" }];
};

export default function Index() {
  const { user } = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const message = searchParams.get("message");

  return (
    <PageLayout>
      {user ? (
        <>
          <div className="flex h-full flex-col items-center justify-between space-y-4 p-14">
            <div className="flex w-full items-center justify-between">
              <img
                src={dashboardLogo}
                style={{ height: 58 }}
                alt="QuickCheck Dashbaord"
              />
              <button>
                <img src={hamburger} style={{ height: 31 }} alt="menu" />
              </button>
            </div>
            <p className="text-2xl text-white !text-opacity-30">
              Coming soon...
            </p>
            <div />
          </div>
          <div className="rounded-t-3xl bg-white px-8 py-6">
            <div className="flex justify-center space-x-11">
              <Button onClick={() => navigate("/reset")}>Reset</Button>
              <Button
                onClick={() => navigate("/nq")}
                className="bg-lime-200 hover:bg-lime-300"
              >
                Return to questions
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex h-full flex-col items-center justify-center space-y-4">
          {message && <p className="text-sm text-white">{message}</p>}
          <AccelerateButton />
        </div>
      )}
    </PageLayout>
  );
}
