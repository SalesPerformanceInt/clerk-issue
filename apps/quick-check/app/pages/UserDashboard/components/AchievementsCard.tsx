import { Suspense, type FC } from "react"
import { useTranslation } from "react-i18next"

import { TypedAwait } from "remix-typedjson"

import {
  Achievement,
  CardTitle,
  MobileCarouselCard,
  MobileCarouselCardSkeleton,
  type CardProps,
} from "quickcheck-shared"

import type { UserDashboardAchievements } from "~/graphql"

/**
 * Achievements Suspense Component
 */

type AchievementsSuspenseProps = {
  achievementsPromise: Promise<UserDashboardAchievements | null>
}

export const AchievementsSuspense: FC<AchievementsSuspenseProps> = ({ achievementsPromise }) => {
  return (
    <Suspense fallback={<MobileCarouselCardSkeleton className="h-64 p-6" title />}>
      <TypedAwait resolve={achievementsPromise}>
        {(achievementsData) => {
          if (!achievementsData) return null

          return <AchievementsCard achievementsData={achievementsData} />
        }}
      </TypedAwait>
    </Suspense>
  )
}

/**
 * Achievements Card Component
 */

type AchievementsCardProps = CardProps & {
  achievementsData: UserDashboardAchievements
}

const AchievementsCard: FC<AchievementsCardProps> = ({ achievementsData, ...props }) => {
  const { t } = useTranslation()

  const {
    attemptedSkills,
    attemptedSkillsPercentage,
    completedEnrollments,
    completedEnrollmentsPercentage,
    retiredQuestions,
    retiredQuestionsPercentage,
  } = achievementsData

  return (
    <MobileCarouselCard {...props}>
      <CardTitle title={t("common.achievements")} className="p-6 pb-0" />

      <section className="flex h-full items-center justify-between gap-4 p-6">
        <Achievement
          percentage={attemptedSkillsPercentage}
          text={`${attemptedSkills}`}
          pathClassName="stroke-chart-1"
          label={t("user.dashboard.achievements.skills_attempted")}
          tooltip={[t("user.dashboard.achievements.questions_attempted.tooltip")]}
        />
        <Achievement
          percentage={completedEnrollmentsPercentage}
          text={`${completedEnrollments}`}
          pathClassName="stroke-chart-2"
          label={t("user.dashboard.achievements.completed_enrollments")}
        />
        <Achievement
          percentage={retiredQuestionsPercentage}
          text={`${retiredQuestions}`}
          pathClassName="stroke-chart-3"
          label={t("user.dashboard.achievements.questions_retired")}
          tooltip={[t("user.dashboard.achievements.questions_retired.tooltip")]}
        />
      </section>
    </MobileCarouselCard>
  )
}
