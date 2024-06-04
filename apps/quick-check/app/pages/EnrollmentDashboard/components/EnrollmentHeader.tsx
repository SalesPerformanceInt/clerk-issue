import { useState, type FC } from "react"
import { useNavigate } from "@remix-run/react"

import { Header, HeaderReturn, HeaderUnansweredQuestions, Support, useIsDesktop } from "quickcheck-shared"

import { useEnrollmentDashboardContext } from "~/pages/EnrollmentDashboard"

/**
 * EnrollmentDashboard Header Component
 */

export const EnrollmentHeader: FC = () => {
  const [start, setStart] = useState(false)

  const navigate = useNavigate()

  const { enrollmentDashboardData } = useEnrollmentDashboardContext()

  const isDesktop = useIsDesktop()

  const startQuestions = () => {
    setStart(true)

    navigate("/next-question")
  }

  return (
    <Header
      left={<HeaderReturn onClose={() => navigate("/")} />}
      right={
        isDesktop ? (
          <HeaderUnansweredQuestions
            userData={enrollmentDashboardData}
            onStart={() => startQuestions()}
            loading={start}
          />
        ) : (
          <Support />
        )
      }
    />
  )
}
