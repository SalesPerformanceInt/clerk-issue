import React, {
  createContext,
  useContext,
  type FC,
  type ReactNode,
} from "react";

import type { FetchedUser } from "~/models/user";

export interface DashboardContextProps {
  user: FetchedUser;
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
  user,
}) => {
  return (
    <DashboardContext.Provider value={{ user }}>
      {children}
    </DashboardContext.Provider>
  );
};
