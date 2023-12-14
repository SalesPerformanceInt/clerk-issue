import { useTranslation } from "react-i18next";

import { Card, ProgressItem } from "quickcheck-shared";

import { useEnrollmentContext } from "~/pages/Enrollment";

export const EnrollmentProgress = () => {
  const { t } = useTranslation();
  const { enrollment } = useEnrollmentContext();

  return (
    <Card className="w-full">
      <ProgressItem
        id={enrollment.id}
        progress={{
          attempted: enrollment.attempted.aggregate?.count ?? 0,
          retired: enrollment.retired.aggregate?.count ?? 0,
          total: enrollment.total.aggregate?.count ?? 0,
        }}
        ariaLabel={t("enrollment.dashboard.progress_bar.aria_label")}
      />
    </Card>
  );
};
