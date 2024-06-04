import { createContext, useContext, type FC, type ReactNode } from "react"

import type { EnrollmentDashboardData } from "~/graphql"

/**
 * Context
 */

export type EnrollmentDashboardContextProps = {
  enrollmentDashboardData: EnrollmentDashboardData
}

export const EnrollmentDashboardContext = createContext<EnrollmentDashboardContextProps | undefined>(undefined)

/**
 * Context Hook
 */

export const useEnrollmentDashboardContext = () => {
  const context = useContext(EnrollmentDashboardContext)

  if (context === undefined) {
    throw new Error("useEnrollmentDashboardContext must be used within a EnrollmentDashboardContextProvider")
  }

  return context
}

/**
 * Context Provider
 */

export type EnrollmentDashboardContextProviderProps = EnrollmentDashboardContextProps & {
  children: ReactNode
}

export const EnrollmentDashboardContextProvider: FC<EnrollmentDashboardContextProviderProps> = ({
  children,
  enrollmentDashboardData,
}) => {
  return (
    <EnrollmentDashboardContext.Provider value={{ enrollmentDashboardData }}>
      {children}
    </EnrollmentDashboardContext.Provider>
  )
}
