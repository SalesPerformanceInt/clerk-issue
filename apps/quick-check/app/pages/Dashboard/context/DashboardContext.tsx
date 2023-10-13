import { createContext, useContext, type FC, type ReactNode } from "react";

import type { DashboardData } from "~/graphql";

/**
 * Context
 */

export interface DashboardContextProps {
  dashboard: DashboardData;
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
export interface DashboardContextProviderProps extends DashboardContextProps {
  children: ReactNode;
}

export const DashboardContextProvider: FC<DashboardContextProviderProps> = ({
  children,
  dashboard,
}) => {
  return (
    <DashboardContext.Provider value={{ dashboard }}>
      {children}
    </DashboardContext.Provider>
  );
};
