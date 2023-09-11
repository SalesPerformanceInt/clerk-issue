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
            <CardTitle title="Leaderboard" className="px-4 py-4 pb-6" />

            <section className="flex flex-col gap-4 px-4 pb-6">
              <LeaderboardEntry
                direction="up"
                rank={2}
                title="Sprint Prospecting"
              />

              <LeaderboardEntry
                direction="up"
                rank={3}
                title="Sprint Selling"
              />

              <LeaderboardEntry
                direction="neutral"
                rank={10}
                title="Six Critical Skills"
              />

              <LeaderboardEntry
                direction="down"
                rank={44}
                title="Consensus Building"
              />
            </section>
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
