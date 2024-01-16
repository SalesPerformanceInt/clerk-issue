import { createContext, useContext, type FC, type ReactNode } from "react";

import type { UserDashboardData } from "~/graphql";

/**
 * Context
 */

export type UserDashboardContextProps = {
  userDashboardData: UserDashboardData;
};

export const UserDashboardContext = createContext<
  UserDashboardContextProps | undefined
>(undefined);

/**
 * Context Hook
 */

export const useUserDashboardContext = () => {
  const context = useContext(UserDashboardContext);

  if (context === undefined) {
    throw new Error(
      "useUserDashboardContext must be used within a UserDashboardContextProvider",
    );
  }

  return context;
};

/**
 * Context Provider
 */

export type UserDashboardContextProviderProps = UserDashboardContextProps & {
  children: ReactNode;
};

export const UserDashboardContextProvider: FC<
  UserDashboardContextProviderProps
> = ({ children, userDashboardData }) => {
  return (
    <UserDashboardContext.Provider value={{ userDashboardData }}>
      {children}
    </UserDashboardContext.Provider>
  );
};
