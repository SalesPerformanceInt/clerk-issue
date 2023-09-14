import React, {
  createContext,
  useContext,
  type FC,
  type ReactNode,
} from "react";

import type { DashboardData } from "~/graphql";

import type { LeaderboardUserEnrollment } from "~/models/leaderboard/leaderboard.types";

/**
 * Context
 */

export interface DashboardContextProps {
  dashboard: DashboardData;
  rankedUserEnrollments: Promise<LeaderboardUserEnrollment[] | null>;
}

export const DashboardContext = createContext<
  DashboardContextProps | undefined
>(undefined);

/**
 * Context Hook
 */

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);

  if (context === undefined) {
    throw new Error("useDashboardContext must be used within a CountProvider");
  }

  return context;
};

/**
 * Context Provider
 */
export interface DashbaordContextProviderProps extends DashboardContextProps {
  children: ReactNode;
}

export const DashboardContextProvider: FC<DashbaordContextProviderProps> = ({
  children,
  dashboard,
  rankedUserEnrollments,
}) => {
  return (
    <DashboardContext.Provider value={{ dashboard, rankedUserEnrollments }}>
      {children}
    </DashboardContext.Provider>
  );
};
