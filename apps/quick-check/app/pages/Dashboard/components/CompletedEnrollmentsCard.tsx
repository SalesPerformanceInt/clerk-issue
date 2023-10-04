import React, { type FC } from "react";
import { useTranslation } from "react-i18next";

import { useNavigate } from "@remix-run/react";

import { Card, CardTitle, ProgressItem } from "quickcheck-shared";

import { useDashboardContext } from "~/pages/Dashboard";

interface CompletedEnrollmentsCardProps {
  className?: string;
}

export const CompletedEnrollmentsCard: FC<CompletedEnrollmentsCardProps> = ({
  className,
}) => {
  const { dashboard } = useDashboardContext();
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (!dashboard.completed_user_enrollments.length) return null;

  return (
    <Card className={className}>
      <CardTitle
        qty={dashboard.completed_user_enrollments.length}
        title={t("user.dashboard.completed_enrollments")}
        className="p-6 pb-0"
      />

      {dashboard.completed_user_enrollments.map((enrollment) => (
        <ProgressItem
          onClick={(id) => navigate(`/dashboard/enrollment/${id}`)}
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
