import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { Card, CardTitle, ProgressItem } from "quickcheck-shared";

import { useDashboardContext } from "~/pages/Dashboard";

export const ActiveEnrollmentsCard: FC = () => {
  const { dashboard } = useDashboardContext();
  const { t } = useTranslation();

  return (
    <Card className="last:col-span-full">
      <CardTitle
        qty={dashboard.user_enrollments.length}
        title={t("user.dashboard.active_enrollments")}
        className="p-6 pb-0"
      />

      {dashboard.user_enrollments.map((enrollment) => (
        <ProgressItem
          key={enrollment.id}
          id={enrollment.id}
          title={enrollment.taxonomy?.display_name}
          progress={{
            attempted: enrollment.attempted.aggregate?.count ?? 0,
            retired: enrollment.retired.aggregate?.count ?? 0,
            total: enrollment.total.aggregate?.count ?? 0,
          }}
        />
      ))}
    </Card>
  );
};
