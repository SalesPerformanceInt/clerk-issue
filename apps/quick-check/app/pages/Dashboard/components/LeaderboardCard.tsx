import { type FC } from "react";

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

export const LeaderboardCard: FC<LeaderboardCardProps> = ({ className }) => {
  const { dashboard } = useDashboardContext();

  return (
    <Card className={twMerge("max-w-sm", className)}>
      <CardTitle title="Leaderboard" className="p-6 pb-0" />

      <section className="flex flex-col gap-4 p-6">
        {dashboard.user_enrollments.slice(0, 4).map((enrollment) => (
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
