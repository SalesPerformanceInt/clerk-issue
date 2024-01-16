import React, { type FC } from "react";
import { useTranslation } from "react-i18next";
import { useMeasure } from "react-use";

import { faArrowRight } from "@fortawesome/pro-light-svg-icons";

import { useIsDesktop } from "~/utils/useIsDesktop";

import { Button, ResponsiveContainer } from "~/components";

interface MobileMenuProps {
  unansweredQuestions?: number;
  onStart: () => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({
  unansweredQuestions,
  onStart,
}) => {
  const isDesktop = useIsDesktop();
  const [ref, { height }] = useMeasure<HTMLDivElement>();
  const { t } = useTranslation();

  if (isDesktop) return null;

  return (
    <>
      <div style={{ height }} />
      <ResponsiveContainer
        ref={ref}
        className="fixed inset-x-0 bottom-0 box-border border-t border-secondary bg-background"
      >
        <div className="flex flex-col items-center gap-1 px-4 pb-4 pt-2">
          <p className="text-xs uppercase text-primary-75">
            {t("common.unanswered", { count: unansweredQuestions })}
          </p>
          {!!unansweredQuestions && (
            <Button
              background="light"
              onClick={onStart}
              rightIcon={faArrowRight}
            >
              {t("common.start")}
            </Button>
          )}
        </div>
      </ResponsiveContainer>
    </>
  );
};
