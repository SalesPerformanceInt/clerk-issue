import React, { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { faArrowRight } from "@fortawesome/pro-light-svg-icons";

import { getUserInitials } from "~/utils/getUserInitials";
import { UserDataWithName } from "~/utils/types";
import { useIsDesktop } from "~/utils/useIsDesktop";

import { Avatar, Button } from "~/components";

interface HeaderUnansweredQuestionsProps {
  unansweredQuestions?: number;
  onStart?: () => void;
}

export const HeaderUnansweredQuestions: FC<HeaderUnansweredQuestionsProps> = ({
  unansweredQuestions,
  onStart,
}) => {
  const isDesktop = useIsDesktop();
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-4 sm:gap-8">
      <div className="flex items-center gap-4">
        <p className="whitespace-pre text-xs uppercase text-background">
          {t("common.unanswered", {
            count: unansweredQuestions,
          })}
        </p>

        {isDesktop && !!unansweredQuestions && onStart && (
          <Button onClick={onStart} rightIcon={faArrowRight}>
            {t("common.start")}
          </Button>
        )}
      </div>
    </div>
  );
};
