import React, { type FC } from "react";
import { useTranslation } from "react-i18next";

import { faArrowUpRightDots } from "@fortawesome/pro-light-svg-icons";
import type { DashboardData } from "~/graphql";

import {
  Card,
  CardTitle,
  LeaderboardEntry,
  MobileCarousel,
  ProgressIcon,
  ResponsiveContainer,
  Section,
} from "quickcheck-shared";

import { ActiveEnrollmentsCard } from "./components/ActiveEnrollmentsCard";
import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardMobileAction } from "./components/DashboardMobileAction";
import { WeeklyStreakCard } from "./components/WeeklyStreakCard";

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
        <MobileCarousel title={t("common.activity")} icon={faArrowUpRightDots}>
          <WeeklyStreakCard />

          <WeeklyStreakCard />

          <Card>
            <CardTitle title="Leaderboard" className="p-6" />

            <LeaderboardEntry
              direction="up"
              rank={1}
              title="Sprint Prospecting"
            />

            <LeaderboardEntry
              direction="up"
              rank={1}
              title="Sprint Prospecting"
            />

            <LeaderboardEntry
              direction="up"
              rank={1}
              title="Sprint Prospecting"
            />
          </Card>
        </MobileCarousel>

        <Section title={t("common.progress")} icon={<ProgressIcon />}>
          <ActiveEnrollmentsCard />
        </Section>
      </ResponsiveContainer>
      <DashboardMobileAction />
    </DashboardContextProvider>
  );
};
