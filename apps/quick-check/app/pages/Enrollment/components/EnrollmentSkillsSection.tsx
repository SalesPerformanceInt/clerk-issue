import { useState, type FC } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "@remix-run/react"

import { isEmpty } from "remeda"

import { EnrollmentSkillCard, Section } from "quickcheck-shared"

import { getEnrollmentSkills } from "~/models/enrollment/handlers/getEnrollmentSkills"

import { useEnrollmentContext } from "~/pages/Enrollment"

export const EnrollmentSkillsSection: FC = () => {
  const [enrollmentSkillNavigation, setEnrollmentSkillNavigation] = useState<string>()

  const { enrollment } = useEnrollmentContext()

  const { t } = useTranslation()
  const navigate = useNavigate()

  const skills = getEnrollmentSkills(enrollment.user_questions)

  const goToEnrollmentSkill = (skillId: string) => {
    setEnrollmentSkillNavigation(skillId)

    navigate(`/dashboard/enrollment/${enrollment.id}/skill/${skillId}`)
  }

  const skillsInProgress = skills.filter(({ completed }) => !enrollment.expired && !completed)
  const skillsCompleted = skills.filter(({ completed }) => enrollment.expired || completed)

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
              className="flow h-fit w-full flex-grow overflow-hidden md:w-1/2-gap-8"
              onClick={(skillId) => goToEnrollmentSkill(skillId)}
              loading={enrollmentSkillNavigation === skill.id}
              completed={enrollment.expired || completed}
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
              className="flow h-fit w-full flex-grow overflow-hidden md:w-1/2-gap-8"
              onClick={(skillId) => goToEnrollmentSkill(skillId)}
              loading={enrollmentSkillNavigation === skill.id}
              completed={enrollment.expired || completed}
              {...skill}
            />
          ))
        )}
      </Section>
    </>
  )
}
