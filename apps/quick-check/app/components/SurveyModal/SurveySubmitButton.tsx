import { useEffect, type FC } from "react";
import { useTranslation } from "react-i18next";

import { useControlField, useFormContext } from "remix-validated-form";

import { Button } from "~qcs/components";

import { Sentiment } from "./SurveyChoice";

export const SurveySubmitButton: FC = () => {
  const { t } = useTranslation();
  const { isValid, isSubmitting } = useFormContext();
  const [value] = useControlField<Sentiment | null>("sentiment");

  const disabled = isSubmitting || !isValid || !value;

  return (
    <Button
      type="submit"
      disabled={disabled}
      background="dark"
      variant="primary"
      className="flex-1"
      loading={isSubmitting}
    >
      {t("buttons.submit")}
    </Button>
  );
};
