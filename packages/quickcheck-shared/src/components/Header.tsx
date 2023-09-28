import React, { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { faAngleLeft, faChevronLeft } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RichardsonLogo } from "~/images/RichardsonLogo";

import { useIsDesktop } from "~/utils/useIsDesktop";

import { ResponsiveContainer } from "~/components";

interface ReturnToDashboardProps {
  onClose: () => void;
}

export const ReturnToDashboard: FC<ReturnToDashboardProps> = ({ onClose }) => {
  const isDesktop = useIsDesktop();
  const { t } = useTranslation();

  return (
    <>
      {isDesktop && <RichardsonLogo className="mr-6" />}
      <button className="flex items-center" onClick={onClose}>
        <FontAwesomeIcon
          icon={isDesktop ? faChevronLeft : faAngleLeft}
          className="text-contrast w-6 text-center text-2xl font-light leading-6 sm:text-base sm:w-[10px]"
        />
        <div className="text-contrast ml-2 font-light sm:ml-4 sm:font-bold">
          {t("buttons.dashboard")}
        </div>
      </button>
    </>
  );
};
interface HeaderProps {
  left?: ReactNode;
  right?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ left, right }) => {
  return (
    <ResponsiveContainer className="bg-primary sticky top-0 z-10">
      <div className="p-4 sm:px-0 sm:py-6 flex items-center">
        {left}
        <div className="flex-grow" />
        {right}
      </div>
    </ResponsiveContainer>
  );
};
