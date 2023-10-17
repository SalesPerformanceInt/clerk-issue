import { createContext, useContext, type FC, type ReactNode } from "react";

import type { EnrollmentData } from "~/graphql";

import type { LeaderboardEnrollment } from "~/models/leaderboard/leaderboard.types";

/**
 * Context
 */

export interface EnrollmentContextProps {
  enrollment: EnrollmentData;
  leaderboard: LeaderboardEnrollment[] | null;
}

export const EnrollmentContext = createContext<
  EnrollmentContextProps | undefined
>(undefined);

/**
 * Context Hook
 */

export const useEnrollmentContext = () => {
  const context = useContext(EnrollmentContext);

  if (context === undefined) {
    throw new Error("useEnrollmentContext must be used within a CountProvider");
  }

  return context;
};

/**
 * Context Provider
 */

export interface EnrollmentContextProviderProps extends EnrollmentContextProps {
  children: ReactNode;
}

export const EnrollmentContextProvider: FC<EnrollmentContextProviderProps> = ({
  children,
  enrollment,
  leaderboard,
}) => {
  return (
    <EnrollmentContext.Provider value={{ enrollment, leaderboard }}>
      {children}
    </EnrollmentContext.Provider>
  );
};
