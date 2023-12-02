import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { faAngleLeft, faChevronLeft } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RichardsonLogo } from "~/images/RichardsonLogo";

import { useIsDesktop } from "~/utils/useIsDesktop";

interface HeaderReturnToDashboardProps {
  onClose: () => void;
}

export const HeaderReturnToDashboard: FC<HeaderReturnToDashboardProps> = ({
  onClose,
}) => {
  const isDesktop = useIsDesktop();
  const { t } = useTranslation();

  return (
    <>
      {isDesktop && <RichardsonLogo />}
      <button className="flex items-center" onClick={onClose}>
        <FontAwesomeIcon
          icon={isDesktop ? faChevronLeft : faAngleLeft}
          className="w-6 text-center text-2xl font-light leading-6 text-contrast sm:w-[10px] sm:text-base"
        />
        <div className="ml-2 font-light text-contrast sm:ml-4 sm:font-bold">
          {t("common.dashboard")}
        </div>
      </button>
    </>
  );
};
