import { Suspense, type FC } from "react"
import { useTranslation } from "react-i18next"

import { TypedAwait } from "remix-typedjson"

import { CardSkeleton, EnrollmentSkillCard, ProgressItem, Section } from "quickcheck-shared"

import type { EnrollmentSkillDashboardQuestions } from "~/graphql"

import { getEnrollmentSkills } from "~/models/enrollment/handlers/getEnrollmentSkills"

import { useEnrollmentSkillDashboardContext } from "~/pages/EnrollmentSkillDashboard"

/**
 * Enrollment Skill Section Suspense Component
 */

type EnrollmentSkillSectionSuspenseProps = {
  skillQuestionsPromise: Promise<EnrollmentSkillDashboardQuestions | null>
}

export const EnrollmentSkillSectionSuspense: FC<EnrollmentSkillSectionSuspenseProps> = ({ skillQuestionsPromise }) => {
  return (
    <Section className="mt-4">
      <Suspense fallback={<CardSkeleton className="flow h-36 w-full flex-grow p-6" title />}>
        <TypedAwait resolve={skillQuestionsPromise}>
          {(skillQuestions) => (skillQuestions ? <EnrollmentSkillSection skillQuestions={skillQuestions} /> : null)}
        </TypedAwait>
      </Suspense>
    </Section>
  )
}

/**
 * Enrollment Skill Section Component
 */

type EnrollmentSkillSectionProps = {
  skillQuestions: EnrollmentSkillDashboardQuestions
}

const EnrollmentSkillSection: FC<EnrollmentSkillSectionProps> = ({ skillQuestions }) => {
  const { t } = useTranslation()

  const { enrollmentSkillDashboardData } = useEnrollmentSkillDashboardContext()
  const { attempted_by_skill, retired_by_skill, total_by_skill } = enrollmentSkillDashboardData

  const skill = getEnrollmentSkills(skillQuestions)[0]!

  return (
    <EnrollmentSkillCard
      categories={["baseline", "final"]}
      className="flow h-fit w-full flex-grow overflow-hidden p-2"
      {...skill}
    >
      <ProgressItem
        id={skill.id}
        progress={{
          attempted: attempted_by_skill.aggregate?.count ?? 0,
          retired: retired_by_skill.aggregate?.count ?? 0,
          total: total_by_skill.aggregate?.count ?? 0,
        }}
        ariaLabel={t("enrollment.dashboard.progress_bar.aria_label")}
        className="border-b-0 p-0"
      />
    </EnrollmentSkillCard>
  )
}
