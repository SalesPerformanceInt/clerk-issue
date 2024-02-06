import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { faArrowRight } from "@fortawesome/pro-light-svg-icons";
import { withZod } from "@remix-validated-form/with-zod";
import { pipe, splitAt } from "remeda";
import { ValidatedForm } from "remix-validated-form";
import { z } from "zod";

import { Button, Card } from "quickcheck-shared";

import { FormInput } from "~/components";

import { useLandingContext } from "../LandingContext";
import { LandingCard } from "./LandingCard";
import { LandingContactSupport } from "./LandingContactSupport";
import { LandingWelcome } from "./LandingWelcome";

export const landingActionValidator = withZod(
  z.object({
    email: z.string().email(),
  }),
);

export const LandingActionSection: FC = () => {
  const { t } = useTranslation();

  const { headerHeight, footerHeight } = useLandingContext();

  return (
    <ValidatedForm
      validator={landingActionValidator}
      className="flex-1 lg:h-full"
      method="post"
    >
      <LandingWelcome />
      <LandingCard />
      <LandingContactSupport />
    </ValidatedForm>
  );
};