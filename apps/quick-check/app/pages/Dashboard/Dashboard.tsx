import React, { type FC } from "react";
import { useTranslation } from "react-i18next";

import { faArrowUpRightDots } from "@fortawesome/pro-light-svg-icons";

import {
  MobileCarousel,
  ProgressIcon,
  ResponsiveContainer,
  Section,
} from "quickcheck-shared";

import {
  AchievementsCard,
  ActiveEnrollmentsCard,
  CompletedEnrollmentsCard,
  DashboardHeader,
  DashboardMobileAction,
  LeaderboardCard,
  WeeklyStreakCard,
} from "./components";

import {
  DashboardContextProvider,
  type DashboardContextProps,
} from "./context/DashboardContext";

interface DashboardProps extends DashboardContextProps {}

export const Dashboard: FC<DashboardProps> = ({
  dashboard,
  rankedUserEnrollments,
}) => {
  const { t } = useTranslation();

  return (
    <DashboardContextProvider
      dashboard={dashboard}
      rankedUserEnrollments={rankedUserEnrollments}
    >
      <DashboardHeader />

      <ResponsiveContainer className="p-4">
        <MobileCarousel title={t("common.activity")} icon={faArrowUpRightDots}>
          <WeeklyStreakCard />

          <AchievementsCard />

          <LeaderboardCard />
        </MobileCarousel>

        <Section title={t("common.progress")} icon={<ProgressIcon />}>
          <ActiveEnrollmentsCard />
          <CompletedEnrollmentsCard />
        </Section>
      </ResponsiveContainer>
      <DashboardMobileAction />
    </DashboardContextProvider>
  );
};
