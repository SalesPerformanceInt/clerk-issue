import { Suspense, type FC } from "react";
import { useTranslation } from "react-i18next";

import { Await } from "@remix-run/react";

import { twMerge } from "tailwind-merge";
import { useDashboardContext } from "~/pages/Dashboard";

import {
  Card,
  CardTitle,
  LeaderboardEntry,
  type LeaderboardEntryProps,
} from "quickcheck-shared";

type LeaderboardCardProps = {
  entries?: LeaderboardEntryProps[];
  className?: string;
};

const CachedLeaderboard: FC = () => {
  const { dashboard } = useDashboardContext();

  return (
    <>
      {dashboard.active_user_enrollments.slice(0, 4).map((enrollment) => (
        <LeaderboardEntry
          key={enrollment.id}
          rank={enrollment.rank || 1}
          title={enrollment.taxonomy?.display_name || ""}
        />
      ))}
    </>
  );
};

export const LeaderboardCard: FC<LeaderboardCardProps> = ({ className }) => {
  const { t } = useTranslation();
  const { rankedUserEnrollments } = useDashboardContext();

  return (
    <Card className={twMerge("max-w-sm", className)}>
      <CardTitle title={t("common.leaderboard")} className="p-6 pb-0" />

      <section className="flex flex-col gap-4 p-6">
        <Suspense fallback={<CachedLeaderboard />}>
          <Await resolve={rankedUserEnrollments}>
            {(rankedEnrollments) => {
              if (!rankedEnrollments) return <CachedLeaderboard />;

              return rankedEnrollments
                .sort((a, b) => a.rank - b.rank)
                .slice(0, 4)
                .map((rankedEnrollment) => (
                  <LeaderboardEntry
                    key={rankedEnrollment.id}
                    rank={rankedEnrollment.rank || 0}
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
