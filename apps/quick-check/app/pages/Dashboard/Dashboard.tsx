import React, { type FC } from "react";
import { useTranslation } from "react-i18next";

import { faArrowUpRightDots } from "@fortawesome/pro-light-svg-icons";

import {
  MobileCarousel,
  ProgressIcon,
  ResponsiveContainer,
  Section,
} from "quickcheck-shared";

import type { DashboardData } from "~/graphql";

import {
  ActiveEnrollmentsCard,
  DashboardHeader,
  DashboardMobileAction,
  LeaderboardCard,
  WeeklyStreakCard,
} from "./components";

import { DashboardContextProvider } from "./context/DashboardContext";

interface DashboardProps {
  dashboard: DashboardData;
  somethingElse: string;
}

export const Dashboard: FC<DashboardProps> = ({ dashboard, somethingElse }) => {
  const { t } = useTranslation();

  return (
    <DashboardContextProvider
      dashboard={dashboard}
      somethingElse={somethingElse}
    >
      <DashboardHeader />

      <ResponsiveContainer className="p-4">
        <MobileCarousel title={t("common.activity")} icon={faArrowUpRightDots}>
          <WeeklyStreakCard />

          <WeeklyStreakCard />

          <LeaderboardCard />
        </MobileCarousel>

        <Section title={t("common.progress")} icon={<ProgressIcon />}>
          <ActiveEnrollmentsCard />
        </Section>
      </ResponsiveContainer>
      <DashboardMobileAction />
    </DashboardContextProvider>
  );
};
