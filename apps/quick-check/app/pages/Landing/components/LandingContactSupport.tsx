import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "quickcheck-shared";

export const LandingContactSupport: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between">
      <p className="">{t("landing.no_account")}</p>
      <Button
        background="light"
        variant="secondary"
        className="w-auto min-w-44"
        onClick={() => {
          window.open("support@richardsonaccelerate.com", "_blank");
        }}
      >
        {t("common.contact_support")}
      </Button>
    </div>
  );
};
