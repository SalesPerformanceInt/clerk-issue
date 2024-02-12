import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { LinkButton } from "quickcheck-shared";

export const LandingContactSupport: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between">
      <p className="">{t("landing.no_account")}</p>
      <LinkButton
        href="mailto:support@richardsonaccelerate.com"
        target="_blank"
        background="light"
        variant="secondary"
        className="w-auto min-w-44"
      >
        {t("common.contact_support")}
      </LinkButton>
    </div>
  );
};
