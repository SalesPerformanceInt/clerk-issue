import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { Card, CardTitle, LeaderboardEntry } from "quickcheck-shared";

import { useEnrollmentContext } from "../context/EnrollmentContext";

type EnrollmentLeaderboardCardProps = {};

export const EnrollmentLeaderboardCard: FC<
  EnrollmentLeaderboardCardProps
> = () => {
  const { t } = useTranslation();

  const { leaderboard, enrollment } = useEnrollmentContext();

  return (
    <Card className="w-full">
      <CardTitle title={t("common.leaderboard")} className="px-4 pb-6 pt-4" />

      <section className="flex flex-col gap-2 pb-3">
        {leaderboard?.map((rankedEnrollment) => (
          <LeaderboardEntry
            key={rankedEnrollment.id}
            className="px-4 py-1"
            rank={rankedEnrollment.rank}
            title={`${rankedEnrollment.user.first_name} ${rankedEnrollment.user.last_name}`}
            score={rankedEnrollment.score}
            featured={rankedEnrollment.user_id === enrollment.user_id}
          />
        ))}
      </section>
    </Card>
  );
};
