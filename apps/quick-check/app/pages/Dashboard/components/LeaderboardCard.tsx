import { Suspense, type FC } from "react";
import { useTranslation } from "react-i18next";

import { Await } from "@remix-run/react";

import { twMerge } from "tailwind-merge";

import {
  Card,
  CardTitle,
  LeaderboardEntry,
  type LeaderboardEntryProps,
} from "quickcheck-shared";

import { useDashboardContext } from "~/pages/Dashboard";

type LeaderboardCardProps = {
  entries?: LeaderboardEntryProps[];
  className?: string;
};

/**
 * Cached Leaderboard
 */

const CachedLeaderboard: FC = () => {
  const { dashboard } = useDashboardContext();

  const cachedRankedEnrollments = dashboard.active_user_enrollments
    .filter((enrollment) => enrollment.rank && enrollment.score)
    .sort((a, b) => a.rank! - b.rank!)
    .slice(0, 4);

  return (
    <>
      {cachedRankedEnrollments.map((enrollment) => (
        <LeaderboardEntry
          key={enrollment.id}
          rank={enrollment.rank || 0}
          title={enrollment.taxonomy?.display_name || ""}
        />
      ))}
    </>
  );
};

/**
 * Leaderboard Card
 */

export const LeaderboardCard: FC<LeaderboardCardProps> = ({ className }) => {
  const { userLeaderboard } = useDashboardContext();

  const { t } = useTranslation();

  return (
    <Card className={twMerge("max-w-sm", className)}>
      <CardTitle title={t("common.leaderboard")} className="p-6 pb-0" />

      <section className="flex flex-col gap-4 p-6">
        <Suspense fallback={<CachedLeaderboard />}>
          <Await resolve={userLeaderboard}>
            {(rankedEnrollments) => {
              if (!rankedEnrollments) return <CachedLeaderboard />;

              return rankedEnrollments.map((rankedEnrollment) => (
                <LeaderboardEntry
                  key={rankedEnrollment.id}
                  rank={rankedEnrollment.rank}
                  title={rankedEnrollment.displayName}
                />
              ));
            }}
          </Await>
        </Suspense>
      </section>
    </Card>
  );
};