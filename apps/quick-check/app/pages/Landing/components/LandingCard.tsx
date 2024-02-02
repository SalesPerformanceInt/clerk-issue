import type { FC } from "react";
import { useActionData, useSearchParams } from "@remix-run/react";

import { Card } from "quickcheck-shared";

import { LandingActionResponse } from "../Landing.types";
import { LandingEmailSubmit } from "./LandingEmailSubmit";
import { LandingEmailSubmitted } from "./LandingEmailSubmitted";
import { LandingExpiredLink } from "./LandingExpiredLink";

export const LandingCard: FC = () => {
  const [searchParams] = useSearchParams();
  const actionResponse = useActionData<LandingActionResponse>();

  const expired = searchParams.get("expired") === "true";

  const renderContent = () => {
    if (expired) return <LandingExpiredLink />;
    if (actionResponse?.ok) return <LandingEmailSubmitted />;
    return <LandingEmailSubmit />;
  };

  return <Card className="my-6 p-8 lg:my-8">{renderContent()}</Card>;
};
