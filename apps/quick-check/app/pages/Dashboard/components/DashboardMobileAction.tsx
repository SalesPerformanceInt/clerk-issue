import React, { type FC } from "react";
import { useTranslation } from "react-i18next";
import { useMeasure } from "react-use";

import { useNavigate } from "@remix-run/react";

import { faArrowRight } from "@fortawesome/pro-light-svg-icons";
import { useDashboardContext } from "~/pages/Dashboard";

import { Button, ResponsiveContainer, useIsDesktop } from "quickcheck-shared";

export const DashboardMobileAction: FC = () => {
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();
  const [ref, { height }] = useMeasure<HTMLDivElement>();
  const { t } = useTranslation();
  const { dashboard } = useDashboardContext();

  if (isDesktop) return null;

  return (
    <>
      <div style={{ height }} />
      <ResponsiveContainer
        ref={ref}
        className="fixed bottom-0 bg-background inset-x-0 box-border border-t border-secondary"
      >
        <div className="px-4 pb-4 pt-2 flex flex-col gap-2 items-center">
          <p className="text-xs text-primary-75 uppercase">
            {t("common.unanswered", { count: dashboard.unanswered_questions })}
          </p>
          <Button
            background="light"
            onClick={() => navigate("/nq")}
            rightIcon={faArrowRight}
          >
            {t("buttons.start")}
          </Button>
        </div>
      </ResponsiveContainer>
    </>
  );
};
