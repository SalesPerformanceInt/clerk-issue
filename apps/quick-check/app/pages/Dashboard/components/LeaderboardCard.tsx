import { type FC } from "react";
import { useTranslation } from "react-i18next";

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
 * Leaderboard Card
 */

export const LeaderboardCard: FC<LeaderboardCardProps> = ({ className }) => {
  const { dashboard } = useDashboardContext();

  const { t } = useTranslation();

  const rankedEnrollments = dashboard.active_user_enrollments
    .filter((enrollment) => enrollment.rank && enrollment.score)
    .sort((a, b) => a.rank! - b.rank!)
    .slice(0, 4);

  return (
    <Card className={twMerge("max-w-sm", className)}>
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
    </Card>
  );
};
