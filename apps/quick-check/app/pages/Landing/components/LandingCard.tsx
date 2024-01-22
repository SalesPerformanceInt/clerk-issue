import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "@remix-run/react";

import { useFormContext } from "remix-validated-form";

import { Card } from "quickcheck-shared";

import { LandingEmailSubmit } from "./LandingEmailSubmit";
import { LandingEmailSubmitted } from "./LandingEmailSubmitted";
import { LandingExpiredLink } from "./LandingExpiredLink";

export const LandingCard: FC = () => {
  const { t } = useTranslation();
  const { hasBeenSubmitted } = useFormContext();
  const [searchParams] = useSearchParams();

  const expired = searchParams.get("expired") === "true";

  const renderContent = () => {
    if (expired) return <LandingExpiredLink />;
    if (hasBeenSubmitted) return <LandingEmailSubmitted />;
    return <LandingEmailSubmit />;
  };

  return <Card className="my-6 p-8 lg:my-8">{renderContent()}</Card>;
};
