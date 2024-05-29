import { forwardRef, type FC } from "react"
import { useNavigate } from "@remix-run/react"

import { MobileMenu } from "quickcheck-shared"

import { useUserDashboardContext } from "~/pages/UserDashboard"

import { useSurveyContext } from "~/components"

export const DashboardMobileAction: FC = () => {
  const navigate = useNavigate()

  const { userDashboardData } = useUserDashboardContext()
  const { footerRef } = useSurveyContext()

  return <MobileMenu ref={footerRef} userData={userDashboardData} onStart={() => navigate("/next-question")} />
}
