import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { faAngleLeft, faChevronLeft } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RichardsonLogo } from "~/images/RichardsonLogo";

import { useIsDesktop } from "~/utils/useIsDesktop";

import { Header } from "~/components";
import { useQuestionContext } from "~/components/Question";

export const QuestionHeader: FC = () => {
  const { onClose } = useQuestionContext();

  const isDesktop = useIsDesktop();
  const { t } = useTranslation();

  return (
    <Header
      left={
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
      }
    ></Header>
  );
};
