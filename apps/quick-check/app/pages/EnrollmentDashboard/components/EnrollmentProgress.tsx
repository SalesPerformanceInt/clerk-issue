import { useTranslation } from "react-i18next"

import { Card, ProgressItem } from "quickcheck-shared"

import { useEnrollmentDashboardContext } from "~/pages/EnrollmentDashboard"

/**
 * EnrollmentDashboard Progress Component
 */

export const EnrollmentProgress = () => {
  const { t } = useTranslation()
  const { enrollmentDashboardData } = useEnrollmentDashboardContext()

  return (
    <Card className="w-full">
      <ProgressItem
        id={enrollmentDashboardData.id}
        progress={{
          attempted: enrollmentDashboardData.attempted.aggregate?.count ?? 0,
          retired: enrollmentDashboardData.retired.aggregate?.count ?? 0,
          total: enrollmentDashboardData.total.aggregate?.count ?? 0,
        }}
        ariaLabel={t("enrollment.dashboard.progress_bar.aria_label")}
      />
    </Card>
  )
}
