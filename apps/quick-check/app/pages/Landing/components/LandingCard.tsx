import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { useFormContext } from "remix-validated-form";

import { Card } from "quickcheck-shared";

import { LandingEmailSubmit } from "./LandingEmailSubmit";
import { LandingEmailSubmitted } from "./LandingEmailSubmitted";

export const LandingCard: FC = () => {
  const { t } = useTranslation();
  const { hasBeenSubmitted } = useFormContext();

  return (
    <Card className="my-6 p-8 lg:my-8">
      {hasBeenSubmitted ? <LandingEmailSubmitted /> : <LandingEmailSubmit />}
    </Card>
  );
};
