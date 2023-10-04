import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { faArrowRight } from "@fortawesome/pro-light-svg-icons";

import { Button } from "~/components";

interface MobileMenuUnansweredQuestionsProps {
  unansweredQuestions?: number;
  onStart: () => void;
}

export const MobileMenuUnansweredQuestions: FC<
  MobileMenuUnansweredQuestionsProps
> = ({ unansweredQuestions, onStart }) => {
  const { t } = useTranslation();

  return (
    <div className="px-4 pb-4 pt-2 flex flex-col gap-2 items-center">
      <p className="text-xs text-primary-75 uppercase">
        {t("common.unanswered", { count: unansweredQuestions })}
      </p>
      {unansweredQuestions && (
        <Button background="light" onClick={onStart} rightIcon={faArrowRight}>
          {t("common.start")}
        </Button>
      )}
    </div>
  );
};
