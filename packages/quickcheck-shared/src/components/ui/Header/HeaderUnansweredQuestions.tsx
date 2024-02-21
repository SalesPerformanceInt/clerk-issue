import React, { type FC } from "react";
import { useTranslation } from "react-i18next";

import { faArrowRight } from "@fortawesome/pro-light-svg-icons";

import { useIsDesktop } from "~qcs/utils/useIsDesktop";

import { Button } from "~qcs/components";

interface HeaderUnansweredQuestionsProps {
  unansweredQuestions?: number;
  onStart?: () => void;
  loading?: boolean;
  short?: boolean;
}

export const HeaderUnansweredQuestions: FC<HeaderUnansweredQuestionsProps> = ({
  unansweredQuestions,
  onStart,
  loading,
  short,
}) => {
  const isDesktop = useIsDesktop();
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-4 sm:gap-8">
      <div className="flex items-center gap-4">
        <p className="whitespace-pre text-xs uppercase text-background">
          {t("common.unanswered", {
            count: unansweredQuestions,
            context: short ? "short" : undefined,
          })}
        </p>

        {isDesktop && !!unansweredQuestions && onStart && (
          <Button onClick={onStart} rightIcon={faArrowRight} loading={loading}>
            {t("common.start")}
          </Button>
        )}
      </div>
    </div>
  );
};
