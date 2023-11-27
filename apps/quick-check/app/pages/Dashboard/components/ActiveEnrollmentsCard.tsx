import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@remix-run/react";

import { Card, CardTitle, ProgressItem } from "quickcheck-shared";

import { useDashboardContext } from "~/pages/Dashboard";

interface ActiveEnrollmentsCardProps {
  className?: string;
}

export const ActiveEnrollmentsCard: FC<ActiveEnrollmentsCardProps> = ({
  className,
}) => {
  const { dashboard } = useDashboardContext();
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (!dashboard.active_user_enrollments.length) return null;

  return (
    <Card className={className}>
      <CardTitle
        qty={dashboard.active_user_enrollments.length}
        title={t("user.dashboard.active_enrollments")}
        className="p-6 pb-0"
      />
      {dashboard.active_user_enrollments.map((enrollment) => (
        <ProgressItem
          onClick={(id) => navigate(`/dashboard/enrollment/${id}`)}
          key={enrollment.id}
          id={enrollment.id}
          title={enrollment.taxonomy?.display_name}
          ranking={enrollment.rank}
          score={enrollment.score}
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
