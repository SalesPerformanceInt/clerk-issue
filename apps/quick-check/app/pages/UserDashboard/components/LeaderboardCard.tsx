import { Suspense, type FC } from "react";
import { useTranslation } from "react-i18next";

import { TypedAwait } from "remix-typedjson";

import {
  CardTitle,
  LeaderboardEntry,
  MobileCarouselCard,
  MobileCarouselCardSkeleton,
  type CardProps,
} from "quickcheck-shared";

import type {
  UserDashboardActiveEnrollments,
  UserDashboardCompletedEnrollments,
} from "~/graphql";

import { getUserLeaderboard } from "~/models/leaderboard";

/**
 * Leaderboard Suspense Component
 */

type LeaderboardSuspenseProps = {
  activeEnrollmentsPromise: Promise<UserDashboardActiveEnrollments | null>;
  completedEnrollmentsPromise: Promise<UserDashboardCompletedEnrollments | null>;
};

export const LeaderboardSuspense: FC<LeaderboardSuspenseProps> = ({
  activeEnrollmentsPromise,
  completedEnrollmentsPromise,
}) => {
  return (
    <Suspense
      fallback={<MobileCarouselCardSkeleton className="h-64 p-6" title />}
    >
      <TypedAwait
        resolve={Promise.all([
          activeEnrollmentsPromise,
          completedEnrollmentsPromise,
        ])}
      >
        {([activeEnrollments, completedEnrollments]) => {
          if (!activeEnrollments || !completedEnrollments) return null;

          return (
            <LeaderboardCard
              activeEnrollments={activeEnrollments}
              completedEnrollments={completedEnrollments}
            />
          );
        }}
      </TypedAwait>
    </Suspense>
  );
};

/**
 * Leaderboard Card Component
 */

type LeaderboardCardProps = CardProps & {
  activeEnrollments: UserDashboardActiveEnrollments;
  completedEnrollments: UserDashboardCompletedEnrollments;
};

const LeaderboardCard: FC<LeaderboardCardProps> = ({
  activeEnrollments,
  completedEnrollments,
  ...props
}) => {
  const { t } = useTranslation();

  const rankedEnrollments = getUserLeaderboard([
    ...activeEnrollments,
    ...completedEnrollments,
  ]);

  if (!rankedEnrollments.length) return null;

  return (
    <MobileCarouselCard {...props}>
      <CardTitle title={t("common.leaderboard")} className="p-6 pb-0" />

      <section className="flex flex-col gap-4 p-6">
        {rankedEnrollments.map((enrollment) => (
          <LeaderboardEntry
            key={enrollment.id}
            rank={enrollment.rank || 0}
            title={enrollment.taxonomy?.display_name || ""}
          />
        ))}
      </section>
    </MobileCarouselCard>
  );
};
