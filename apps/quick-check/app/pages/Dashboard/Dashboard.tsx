import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { faArrowUpRightDots } from "@fortawesome/pro-light-svg-icons";

import {
  MobileCarousel,
  ProgressIcon,
  ResponsiveContainer,
  Section,
  useIsDesktop,
} from "quickcheck-shared";

import { AccelerateButton } from "~/components";

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

/**
 * Dashboard Component
 */

export const Dashboard: FC<DashboardProps> = ({ dashboard }) => {
  const { t } = useTranslation();

  const isDesktop = useIsDesktop();

  return (
    <DashboardContextProvider dashboard={dashboard}>
      <DashboardHeader />

      <ResponsiveContainer className="p-4 pb-8">
        <MobileCarousel title={t("common.activity")} icon={faArrowUpRightDots}>
          <WeeklyStreakCard />

          <AchievementsCard />

          <LeaderboardCard />
        </MobileCarousel>

        <Section title={t("common.progress")} icon={<ProgressIcon />}>
          <ActiveEnrollmentsCard />
          <CompletedEnrollmentsCard />
        </Section>

        {!isDesktop && (
          <AccelerateButton
            background="light"
            className="-mt-2"
            tenantId={dashboard.tenant_id}
          />
        )}
      </ResponsiveContainer>
      <DashboardMobileAction />
    </DashboardContextProvider>
  );
};
