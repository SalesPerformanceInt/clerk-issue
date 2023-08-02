import React, {
  createContext,
  useContext,
  type FC,
  type ReactNode,
} from "react";

import type { DashboardData } from "~/graphql";

export interface DashboardContextProps {
  dashboard: DashboardData;
}

export const DashboardContext = createContext<
  DashboardContextProps | undefined
>(undefined);

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);

  if (context === undefined) {
    throw new Error("useDashboardContext must be used within a CountProvider");
  }

  return context;
};

export interface DashbaordContextProviderProps extends DashboardContextProps {
  children: ReactNode;
}

export const DashboardContextProvider: FC<DashbaordContextProviderProps> = ({
  children,
  dashboard,
}) => {
  return (
    <DashboardContext.Provider value={{ dashboard }}>
      {children}
    </DashboardContext.Provider>
  );
};
