import type { FC } from "react"
import { useTranslation } from "react-i18next"

import { PageTitle, ResponsiveContainer } from "quickcheck-shared"

import { EnrollmentSkillDashboard as EnrollmentSkillDashboardData } from "~/models/enrollmentSkill"

import {
  EnrollmentSkillDashboardHeader,
  EnrollmentSkillQuestionReviewSuspense,
  EnrollmentSkillSectionSuspense,
} from "./components"

import {
  EnrollmentSkillDashboardContextProvider,
  type EnrollmentSkillDashboardContextProps,
} from "./context/EnrollmentSkillDashboardContext"

/**
 * EnrollmentSkillDashboard Component
 */

type EnrollmentSkillDashboardProps = {
  enrollmentSkillDashboard: EnrollmentSkillDashboardData & EnrollmentSkillDashboardContextProps
}

export const EnrollmentSkillDashboard: FC<EnrollmentSkillDashboardProps> = ({ enrollmentSkillDashboard }) => {
  const { t } = useTranslation()

  const { enrollmentSkillDashboardData, enrollmentSkillDashboardQuestions } = enrollmentSkillDashboard

  return (
    <EnrollmentSkillDashboardContextProvider enrollmentSkillDashboardData={enrollmentSkillDashboardData}>
      <EnrollmentSkillDashboardHeader />

      <ResponsiveContainer className="p-4 pb-8" asChild>
        <main>
          <PageTitle
            breadcrumbs={[t("common.dashboard"), enrollmentSkillDashboardData.enrollment_taxonomy.display_name]}
            title={enrollmentSkillDashboardData.skill_taxonomy.display_name}
          />

          <EnrollmentSkillSectionSuspense skillQuestionsPromise={enrollmentSkillDashboardQuestions} />

          <EnrollmentSkillQuestionReviewSuspense skillQuestionsPromise={enrollmentSkillDashboardQuestions} />
        </main>
      </ResponsiveContainer>
    </EnrollmentSkillDashboardContextProvider>
  )
}
