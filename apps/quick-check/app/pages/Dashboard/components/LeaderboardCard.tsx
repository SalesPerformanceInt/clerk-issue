import { type FC } from "react";

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
  return (
    <Card className={className}>
      <CardTitle title="Leaderboard" className="px-4 py-4 pb-6" />

      <section className="flex flex-col gap-4 px-4 pb-6">
        <LeaderboardEntry direction="up" rank={2} title="Sprint Prospecting" />

        <LeaderboardEntry direction="up" rank={3} title="Sprint Selling" />

        <LeaderboardEntry
          direction="neutral"
          rank={10}
          title="Six Critical Skills"
        />

        <LeaderboardEntry
          direction="down"
          rank={44}
          title="Consensus Building"
        />
      </section>
    </Card>
  );
};
