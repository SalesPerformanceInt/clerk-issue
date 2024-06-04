import { type FC } from "react"
import { useNavigate } from "@remix-run/react"

import { MobileMenu } from "quickcheck-shared"

import { useEnrollmentDashboardContext } from "~/pages/EnrollmentDashboard"

/**
 * EnrollmentDashboard MobileAction Component
 */

export const EnrollmentMobileAction: FC = () => {
  const navigate = useNavigate()

  const { enrollmentDashboardData } = useEnrollmentDashboardContext()

  return <MobileMenu userData={enrollmentDashboardData} onStart={() => navigate("/next-question")} />
}
