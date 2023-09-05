import React, { type FC } from "react";
import { useTranslation } from "react-i18next";

// import { faArrowUpRightDots } from "@fortawesome/pro-light-svg-icons";
import type { DashboardData } from "~/graphql";

import { ProgressIcon, ResponsiveContainer, Section } from "quickcheck-shared";

import { ActiveEnrollmentsCard } from "./components/ActiveEnrollmentsCard";
import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardMobileAction } from "./components/DashboardMobileAction";

import { DashboardContextProvider } from "./context/DashboardContext";

interface DashboardProps {
  dashboard: DashboardData;
}

export const Dashboard: FC<DashboardProps> = ({ dashboard }) => {
  const { t } = useTranslation();

  return (
    <DashboardContextProvider dashboard={dashboard}>
      <DashboardHeader />
      <ResponsiveContainer className="p-4">
        {/* <Section title={t("common.activity")} icon={faArrowUpRightDots} /></Section> */}
        <Section title={t("common.progress")} icon={<ProgressIcon />}>
          <ActiveEnrollmentsCard />
        </Section>
      </ResponsiveContainer>
      <DashboardMobileAction />
    </DashboardContextProvider>
  );
};
