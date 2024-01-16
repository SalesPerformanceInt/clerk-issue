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

import { UserDashboard as UserDashboardData } from "~/models/userDashboard";

import { AccelerateButton } from "~/components";

import {
  AchievementsSuspense,
  ActiveEnrollmentsSuspense,
  CompletedEnrollmentsSuspense,
  DashboardHeader,
  DashboardMobileAction,
  LeaderboardSuspense,
  WeeklyStreakSuspense,
} from "./components";

import {
  UserDashboardContextProvider,
  type UserDashboardContextProps,
} from "./context/UserDashboardContext";

/**
 * UserDashboard Component
 */

type UserDashboardProps = {
  userDashboard: UserDashboardData & UserDashboardContextProps;
};

export const UserDashboard: FC<UserDashboardProps> = ({ userDashboard }) => {
  const { t } = useTranslation();
  const isDesktop = useIsDesktop();

  const {
    userDashboardWeeklyStreakCalendar,
    userDashboardAchievements,
    userDashboardActiveEnrollments,
    userDashboardCompletedEnrollments,
  } = userDashboard;

  return (
    <UserDashboardContextProvider
      userDashboardData={userDashboard.userDashboardData}
    >
      <DashboardHeader />

      <ResponsiveContainer className="p-4 pb-8" asChild>
        <main>
          <MobileCarousel
            title={t("common.activity")}
            icon={faArrowUpRightDots}
          >
            <WeeklyStreakSuspense
              weeklyStreakPromise={userDashboardWeeklyStreakCalendar}
            />

            <AchievementsSuspense
              achievementsPromise={userDashboardAchievements}
            />

            <LeaderboardSuspense
              activeEnrollmentsPromise={userDashboardActiveEnrollments}
              completedEnrollmentsPromise={userDashboardCompletedEnrollments}
            />
          </MobileCarousel>

          <Section title={t("common.progress")} icon={<ProgressIcon />}>
            <ActiveEnrollmentsSuspense
              activeEnrollmentsPromise={userDashboardActiveEnrollments}
            />

            <CompletedEnrollmentsSuspense
              completedEnrollmentsPromise={userDashboardCompletedEnrollments}
            />
          </Section>

          {!isDesktop && (
            <AccelerateButton
              background="light"
              className="-mt-2"
              tenantId={userDashboard.userDashboardData.tenant_id}
            />
          )}
        </main>
      </ResponsiveContainer>

      <DashboardMobileAction />
    </UserDashboardContextProvider>
  );
};
