import { Suspense, useState, type FC } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "@remix-run/react"

import { isEmpty } from "remeda"
import { TypedAwait } from "remix-typedjson"

import { EnrollmentSkillCard, EnrollmentSkillCardSkeleton, Section, SectionSkeleton } from "quickcheck-shared"

import type { EnrollmentDashboardQuestionsData } from "~/graphql"

import { getEnrollmentSkills } from "~/models/enrollment/handlers/getEnrollmentSkills"

import { useEnrollmentDashboardContext } from "~/pages/EnrollmentDashboard"

/**
 * EnrollmentDashboard Skills Skeleton Component
 */

const EnrollmentSkillsSkeleton: FC = () => {
  return (
    <>
      <SectionSkeleton title>
        <EnrollmentSkillCardSkeleton />
        <EnrollmentSkillCardSkeleton />
        <EnrollmentSkillCardSkeleton />
        <EnrollmentSkillCardSkeleton />
      </SectionSkeleton>
    </>
  )
}

/**
 * EnrollmentDashboard Skills Suspense Component
 */

type EnrollmentSkillsSuspenseProps = {
  enrollmentQuestionsPromise: Promise<EnrollmentDashboardQuestionsData | null>
}

export const EnrollmentSkillsSuspense: FC<EnrollmentSkillsSuspenseProps> = ({ enrollmentQuestionsPromise }) => {
  return (
    <Suspense fallback={<EnrollmentSkillsSkeleton />}>
      <TypedAwait resolve={enrollmentQuestionsPromise}>
        {(enrollmentQuestions) => {
          if (!enrollmentQuestions) return null

          return <EnrollmentSkillsCard enrollmentQuestions={enrollmentQuestions} />
        }}
      </TypedAwait>
    </Suspense>
  )
}

/**
 * EnrollmentDashboard Skills Card Component
 */

type EnrollmentSkillsCardProps = {
  enrollmentQuestions: EnrollmentDashboardQuestionsData
}

const EnrollmentSkillsCard: FC<EnrollmentSkillsCardProps> = ({ enrollmentQuestions }) => {
  const [enrollmentSkillNavigation, setEnrollmentSkillNavigation] = useState<string>()

  const { t } = useTranslation()
  const navigate = useNavigate()

  const { enrollmentDashboardData } = useEnrollmentDashboardContext()

  const enrollmentSkills = getEnrollmentSkills(enrollmentQuestions)
  const skillsInProgress = enrollmentSkills.filter(({ completed }) => !enrollmentDashboardData.expired && !completed)
  const skillsCompleted = enrollmentSkills.filter(({ completed }) => enrollmentDashboardData.expired || completed)

  const goToEnrollmentSkill = (skillId: string) => {
    setEnrollmentSkillNavigation(skillId)

    navigate(`/dashboard/enrollment/${enrollmentDashboardData.id}/skill/${skillId}`)
  }

  return (
    <>
      {!isEmpty(skillsInProgress) && (
        <Section
          title={t("enrollment.dashboard.skills_in_progress")}
          tooltip={[
            t("enrollment.dashboard.skills.tooltip_baseline"),
            t("enrollment.dashboard.skills.tooltip_current"),
          ]}
        >
          {skillsInProgress.map(({ completed, ...skill }) => (
            <EnrollmentSkillCard
              key={skill.skill}
              categories={["baseline", "current"]}
              className="h-fit w-full flex-grow overflow-hidden md:w-1/2-gap-8"
              onClick={(skillId) => goToEnrollmentSkill(skillId)}
              loading={enrollmentSkillNavigation === skill.id}
              completed={enrollmentDashboardData.expired || completed}
              {...skill}
            />
          ))}
        </Section>
      )}
      <Section title={t("enrollment.dashboard.skills_completed")}>
        {isEmpty(skillsCompleted) ? (
          <div className="flex w-full justify-center">
            <p className="text-xs font-semibold uppercase text-text-75">
              {t("enrollment.dashboard.no_skills_completed")}
            </p>
          </div>
        ) : (
          skillsCompleted.map(({ completed, ...skill }) => (
            <EnrollmentSkillCard
              key={skill.skill}
              categories={["baseline", "final"]}
              className="h-fit w-full flex-grow overflow-hidden md:w-1/2-gap-8"
              onClick={(skillId) => goToEnrollmentSkill(skillId)}
              loading={enrollmentSkillNavigation === skill.id}
              completed={enrollmentDashboardData.expired || completed}
              {...skill}
            />
          ))
        )}
      </Section>
    </>
  )
}
