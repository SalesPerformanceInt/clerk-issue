import { Suspense, useEffect, useRef, useState, type FC } from "react"
import { useTranslation } from "react-i18next"

import { TypedAwait } from "remix-typedjson"

import { Button, Card, CardSkeleton, cn, LeaderboardEntry, LeaderboardEntrySkeleton } from "quickcheck-shared"

import type { TaxonomyRankedEnrollment } from "~/graphql"

import { getEnrollmentLeaderboard } from "~/models/leaderboard"
import { LeaderboardView } from "~/models/leaderboard/leaderboard.types"

import { useEnrollmentDashboardContext } from "~/pages/EnrollmentDashboard"

/**
 * EnrollmentDashboard Leaderboard Skeleton Component
 */

const EnrollmentLeaderboardSkeleton: FC = () => {
  return (
    <CardSkeleton className="w-full p-4 pb-6" title>
      <div className="flex flex-col gap-4 pt-8">
        {[...Array(5)].map((_, i) => (
          <LeaderboardEntrySkeleton key={i} />
        ))}
      </div>
    </CardSkeleton>
  )
}

/**
 * EnrollmentDashboard Leaderboard Suspense Component
 */

type EnrollmentLeaderboardSuspenseProps = {
  rankedEnrollmentsPromise: Promise<TaxonomyRankedEnrollment[] | null>
}

export const EnrollmentLeaderboardSuspense: FC<EnrollmentLeaderboardSuspenseProps> = ({ rankedEnrollmentsPromise }) => {
  return (
    <Suspense fallback={<EnrollmentLeaderboardSkeleton />}>
      <TypedAwait resolve={rankedEnrollmentsPromise}>
        {(rankedEnrollments) => {
          if (!rankedEnrollments) return null

          return <EnrollmentLeaderboardCard rankedEnrollments={rankedEnrollments} />
        }}
      </TypedAwait>
    </Suspense>
  )
}

/**
 * EnrollmentDashboard Leaderboard Card Component
 */

type EnrollmentLeaderboardCardProps = {
  rankedEnrollments: TaxonomyRankedEnrollment[]
}

const EnrollmentLeaderboardCard: FC<EnrollmentLeaderboardCardProps> = ({ rankedEnrollments }) => {
  const [leaderboardView, setLeaderboardView] = useState<LeaderboardView>("AllTime")
  const { t } = useTranslation()
  const userPosition = useRef<HTMLDivElement>(null)

  const { enrollmentDashboardData } = useEnrollmentDashboardContext()

  const enrollmentLeaderboard = getEnrollmentLeaderboard({ rankedEnrollments, userEnrollment: enrollmentDashboardData })
  if (!enrollmentLeaderboard) return null

  const currentLeaderboard = leaderboardView === "AllTime"
    ? enrollmentLeaderboard.allTimeLeaderboard
    : enrollmentLeaderboard.focusedLeaderboard

  useEffect(() => {
    if (!userPosition.current) return

    userPosition.current.scrollIntoView({ behavior: "auto", block: "center" })
  }, [currentLeaderboard, userPosition])

  // TODO: Translated Strings
  return (
    <Card className="w-full">
      <div className="flex flex-col items-start justify-between gap-6 px-4 pb-6 pt-4 md:flex-row md:items-center">
        <h2 className="text-base text-text">{t("common.leaderboard")}</h2>

        <div className="flex w-full items-center md:w-fit">
          <Button
            className={cn(
              "w-full rounded-l rounded-r-none px-10",
              leaderboardView === "Focused" ? "bg-primary" : "bg-primary-50",
            )}
            onClick={() => setLeaderboardView("Focused")}
          >
            Focused
          </Button>

          <Button
            className={cn(
              "w-full rounded-l-none rounded-r px-10",
              leaderboardView === "AllTime" ? "bg-primary" : "bg-primary-50",
            )}
            onClick={() => setLeaderboardView("AllTime")}
          >
            All Time
          </Button>
        </div>
      </div>

      <section className="fancy-scrollbar flex max-h-52 flex-col gap-2 overflow-y-auto pb-3">
        {currentLeaderboard?.map((rankedEnrollment) => (
          <LeaderboardEntry
            key={rankedEnrollment.id}
            className="px-4 py-1"
            rank={rankedEnrollment.rank}
            title={`${rankedEnrollment.user.first_name} ${rankedEnrollment.user.last_name}`}
            score={rankedEnrollment.score}
            featured={rankedEnrollment.user_id === enrollmentDashboardData.user_id}
            ref={rankedEnrollment.user_id === enrollmentDashboardData.user_id ? userPosition : undefined}
          />
        ))}
      </section>
    </Card>
  )
}
