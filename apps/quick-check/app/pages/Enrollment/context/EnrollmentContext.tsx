import { createContext, useContext, type FC, type ReactNode } from "react";

import type { EnrollmentData } from "~/graphql";

export interface EnrollmentContextProps {
  enrollment: EnrollmentData;
}

export const EnrollmentContext = createContext<
  EnrollmentContextProps | undefined
>(undefined);

export const useEnrollmentContext = () => {
  const context = useContext(EnrollmentContext);

  if (context === undefined) {
    throw new Error("useEnrollmentContext must be used within a CountProvider");
  }

  return context;
};

export interface DashboardContextProviderProps extends EnrollmentContextProps {
  children: ReactNode;
}

export const EnrollmentContextProvider: FC<DashboardContextProviderProps> = ({
  children,
  enrollment,
}) => {
  return (
    <EnrollmentContext.Provider value={{ enrollment }}>
      {children}
    </EnrollmentContext.Provider>
  );
};
