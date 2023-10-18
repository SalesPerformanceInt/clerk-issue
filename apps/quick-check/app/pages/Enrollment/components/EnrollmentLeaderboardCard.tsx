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
      <CardTitle title={t("common.leaderboard")} className="px-4 pt-4 pb-6" />

      <section className="flex flex-col gap-2 pb-3">
        {leaderboard?.map((rankedEnrollment) => (
          <LeaderboardEntry
            key={rankedEnrollment.id}
            className="py-1 px-4"
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
