import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { faArrowRight } from "@fortawesome/pro-light-svg-icons";
import { useIsSubmitting, useIsValid } from "remix-validated-form";

import { Button } from "quickcheck-shared";

import { FormInput } from "~/components";

export const LandingEmailSubmit: FC = () => {
  const { t } = useTranslation();
  const submitting = useIsSubmitting();
  const isValid = useIsValid();

  return (
    <>
      <p className="mb-4 text-base font-bold">{t("landing.instructions")}</p>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        <div className="flex-1">
          <FormInput
            name="email"
            label="Email Address"
            placeholder="Enter your email"
          />
        </div>
        <div className="w-full lg:w-44">
          <Button
            disabled={!isValid}
            loading={submitting}
            className="w-full"
            type="submit"
            rightIcon={faArrowRight}
            background="light"
          >
            {t("common.log_in")}
          </Button>
        </div>
      </div>
    </>
  );
};
