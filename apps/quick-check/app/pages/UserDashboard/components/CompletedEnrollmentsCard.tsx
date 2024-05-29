import { Suspense, useState, type FC } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "@remix-run/react"

import { TypedAwait } from "remix-typedjson"

import { Card, CardSkeleton, CardTitle, ProgressItem, type CardProps } from "quickcheck-shared"

import type { UserDashboardCompletedEnrollments } from "~/graphql"

import { useUserDashboardContext } from "../context/UserDashboardContext"

/**
 * Completed Enrollments Suspense Component
 */

type CompletedEnrollmentsSuspenseProps = {
  completedEnrollmentsPromise: Promise<UserDashboardCompletedEnrollments | null>
}

export const CompletedEnrollmentsSuspense: FC<CompletedEnrollmentsSuspenseProps> = ({
  completedEnrollmentsPromise,
}) => {
  return (
    <Suspense fallback={<CardSkeleton className="flow h-36 w-full flex-grow p-6 md:w-1/2-gap-8" qty title />}>
      <TypedAwait resolve={completedEnrollmentsPromise}>
        {(completedEnrollments) => {
          if (!completedEnrollments) return null

          return <CompletedEnrollmentsCard completedEnrollments={completedEnrollments} />
        }}
      </TypedAwait>
    </Suspense>
  )
}

/**
 * Completed Enrollments Card Component
 */

type CompletedEnrollmentsCardProps = CardProps & {
  completedEnrollments: UserDashboardCompletedEnrollments
}

const CompletedEnrollmentsCard: FC<CompletedEnrollmentsCardProps> = ({ completedEnrollments }) => {
  const [enrollmentNavigation, setEnrollmentNavigation] = useState<string>()

  const { t } = useTranslation()
  const navigate = useNavigate()

  if (!completedEnrollments.length) return null

  const goToEnrollment = (id: string) => {
    setEnrollmentNavigation(id)

    navigate(`/dashboard/enrollment/${id}`)
  }

  const {
    userDashboardData: { show_leaderboard },
  } = useUserDashboardContext()

  return (
    <Card className="flow h-fit w-full flex-grow overflow-hidden md:w-1/2-gap-8">
      <CardTitle
        qty={completedEnrollments.length}
        title={t("user.dashboard.completed_enrollments")}
        className="p-6 pb-0"
      />

      {completedEnrollments.map((enrollment) => (
        <ProgressItem
          onClick={(id) => goToEnrollment(id)}
          key={enrollment.id}
          id={enrollment.id}
          title={enrollment.taxonomy?.display_name}
          ranking={show_leaderboard && enrollment.rank}
          score={enrollment.score}
          progress={{
            attempted: enrollment.attempted.aggregate?.count ?? 0,
            retired: enrollment.retired.aggregate?.count ?? 0,
            total: enrollment.total.aggregate?.count ?? 0,
          }}
          ariaLabel={t("user.dashboard.completed_enrollments.progress_bar.aria_label")}
          loading={enrollmentNavigation === enrollment.id}
        />
      ))}
    </Card>
  )
}
