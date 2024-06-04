import type { FC, ReactNode } from "react"
import { useTranslation } from "react-i18next"

import { useEnrollmentDashboardContext } from "~/pages/EnrollmentDashboard"

import { EnrollmentProgress } from "./EnrollmentProgress"

/**
 * EnrollmentDashboard Overview Component
 */

type EnrollmentOverviewSectionProps = {
  children: ReactNode
}

export const EnrollmentOverviewSection: FC<EnrollmentOverviewSectionProps> = ({ children }) => {
  const { t } = useTranslation()

  const { enrollmentDashboardData } = useEnrollmentDashboardContext()

  return (
    <section className="mb-10 flex flex-col gap-4 sm:gap-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="hidden text-xs font-semibold uppercase leading-4 sm:block">{`${t("common.dashboard")} /`}</p>
          <h2 className="text-xxl font-semibold leading-8 text-text">
            {enrollmentDashboardData.taxonomy?.display_name}
          </h2>
        </div>

        <h1 className="text-xxl font-normal sm:hidden">{t("common.overview")}</h1>

        <div className="w-full flex-1 sm:max-w-sm">
          <EnrollmentProgress />
        </div>
      </div>

      {children}
    </section>
  )
}
