import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { Card, CardTitle } from "quickcheck-shared";

import { useDashboardContext } from "~/pages/Dashboard";

type EnrollmentLeaderboardCardProps = {};

export const EnrollmentLeaderboardCard: FC<
  EnrollmentLeaderboardCardProps
> = () => {
  const { t } = useTranslation();

  return (
    <Card className="w-full">
      <CardTitle title={t("common.leaderboard")} className="p-6 pb-0" />
    </Card>
  );
};
