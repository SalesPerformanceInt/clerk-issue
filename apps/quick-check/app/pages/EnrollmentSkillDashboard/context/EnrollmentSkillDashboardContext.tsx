import { createContext, useContext, type FC, type ReactNode } from "react"

import type { EnrollmentSkillDashboardData } from "~/graphql"

/**
 * Context
 */

export type EnrollmentSkillDashboardContextProps = {
  enrollmentSkillDashboardData: EnrollmentSkillDashboardData
}

export const EnrollmentSkillDashboardContext = createContext<EnrollmentSkillDashboardContextProps | undefined>(
  undefined,
)

/**
 * Context Hook
 */

export const useEnrollmentSkillDashboardContext = () => {
  const context = useContext(EnrollmentSkillDashboardContext)

  if (context === undefined) {
    throw new Error("useEnrollmentSkillDashboardContext must be used within a EnrollmentSkillDashboardContextProvider")
  }

  return context
}

/**
 * Context Provider
 */

export type EnrollmentSkillDashboardContextProviderProps = EnrollmentSkillDashboardContextProps & {
  children: ReactNode
}

export const EnrollmentSkillDashboardContextProvider: FC<EnrollmentSkillDashboardContextProviderProps> = ({
  children,
  enrollmentSkillDashboardData,
}) => {
  return (
    <EnrollmentSkillDashboardContext.Provider value={{ enrollmentSkillDashboardData }}>
      {children}
    </EnrollmentSkillDashboardContext.Provider>
  )
}
