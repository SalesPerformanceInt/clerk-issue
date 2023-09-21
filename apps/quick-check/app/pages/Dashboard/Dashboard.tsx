import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { faArrowUpRightDots } from "@fortawesome/pro-light-svg-icons";

import {
  MobileCarousel,
  ProgressIcon,
  ResponsiveContainer,
  Section,
} from "quickcheck-shared";

import {
  ActiveEnrollmentsCard,
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

/**
 * Dashboard Component
 */

export const Dashboard: FC<DashboardProps> = ({
  dashboard,
  userLeaderboard,
}) => {
  const { t } = useTranslation();

  return (
    <DashboardContextProvider
      dashboard={dashboard}
      userLeaderboard={userLeaderboard}
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
