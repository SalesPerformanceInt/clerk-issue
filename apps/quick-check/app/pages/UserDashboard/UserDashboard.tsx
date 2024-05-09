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

import {
  AccelerateButton,
  SurveyContextProvider,
  SurveyModal,
  SurveyToast,
} from "~/components";

import {
  AchievementsSuspense,
  ActiveEnrollmentsSuspense,
  CompletedEnrollmentsSuspense,
  DashboardHeader,
  DashboardMobileAction,
  LeaderboardSuspense,
  UserDashboardNoEnrollments,
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
    userDashboardData,
    userDashboardWeeklyStreakCalendar,
    userDashboardAchievements,
    userDashboardActiveEnrollments,
    userDashboardCompletedEnrollments,
  } = userDashboard;

  if (userDashboardData.total_enrollments === 0) {
    return (
      <UserDashboardContextProvider userDashboardData={userDashboardData}>
        <main className="flex h-full flex-col">
          <DashboardHeader />

          <UserDashboardNoEnrollments />
        </main>
      </UserDashboardContextProvider>
    );
  }

  return (
    <UserDashboardContextProvider userDashboardData={userDashboardData}>
      <SurveyContextProvider show={userDashboardData.surveyEligibility}>
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

              {userDashboardData.show_leaderboard && (
                <LeaderboardSuspense
                  activeEnrollmentsPromise={userDashboardActiveEnrollments}
                  completedEnrollmentsPromise={
                    userDashboardCompletedEnrollments
                  }
                />
              )}
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
                tenantId={userDashboardData.tenant_id}
              />
            )}
          </main>
        </ResponsiveContainer>
        <SurveyToast />
        <DashboardMobileAction />
        <SurveyModal />
      </SurveyContextProvider>
    </UserDashboardContextProvider>
  );
};
