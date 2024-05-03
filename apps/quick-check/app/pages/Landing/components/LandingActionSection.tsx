import type { FC } from "react";

import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm } from "remix-validated-form";
import { z } from "zod";

import { LandingCard } from "./LandingCard";
import { LandingContactSupport } from "./LandingContactSupport";
import { LandingWelcome } from "./LandingWelcome";

export const landingActionValidator = withZod(
  z.object({
    email: z.string().email(),
  }),
);

export const LandingActionSection: FC = () => {
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
