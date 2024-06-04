import type { FC } from "react"

import { ResponsiveContainer } from "quickcheck-shared"

import { EnrollmentDashboard as EnrollmentDashboardData } from "~/models/dashboard/enrollmentDashboard.server"

import {
  EnrollmentHeader,
  EnrollmentLeaderboardSuspense,
  EnrollmentMobileAction,
  EnrollmentOverviewSection,
  EnrollmentSkillsSuspense,
} from "./components"

import {
  EnrollmentDashboardContextProvider,
  type EnrollmentDashboardContextProps,
} from "./context/EnrollmentDashboardContext"

/**
 * EnrollmentDashboard Component
 */

type EnrollmentDashboardProps = {
  enrollmentDashboard: EnrollmentDashboardData & EnrollmentDashboardContextProps
}

export const EnrollmentDashboard: FC<EnrollmentDashboardProps> = ({ enrollmentDashboard }) => {
  const { enrollmentDashboardData, enrollmentDashboardRankedEnrollments, enrollmentDashboardQuestions } =
    enrollmentDashboard

  return (
    <EnrollmentDashboardContextProvider enrollmentDashboardData={enrollmentDashboardData}>
      <EnrollmentHeader />

      <ResponsiveContainer className="p-4" asChild>
        <main>
          <EnrollmentOverviewSection>
            <EnrollmentLeaderboardSuspense rankedEnrollmentsPromise={enrollmentDashboardRankedEnrollments} />
          </EnrollmentOverviewSection>

          <EnrollmentSkillsSuspense enrollmentQuestionsPromise={enrollmentDashboardQuestions} />
        </main>
      </ResponsiveContainer>

      <EnrollmentMobileAction />
    </EnrollmentDashboardContextProvider>
  )
}
