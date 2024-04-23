import {
  createContext,
  useContext,
  type FC,
  type ReactNode,
  type Ref,
} from "react";

import useResizeObserver from "use-resize-observer";

export interface LandingContextProps {
  headerRef: Ref<HTMLDivElement>;
  footerRef: Ref<HTMLDivElement>;
  headerHeight: number;
  footerHeight: number;
}

export const LandingContext = createContext<LandingContextProps | undefined>(
  undefined,
);

export const useLandingContext = () => {
  const context = useContext(LandingContext);

  if (context === undefined) {
    throw new Error("useLandingContext must be used within a provider");
  }

  return context;
};

export interface LandingContextProviderProps {
  children: ReactNode;
}

export const LandingContextProvider: FC<LandingContextProviderProps> = ({
  children,
}) => {
  const { ref: headerRef, height: headerHeight = 80 } =
    useResizeObserver<HTMLDivElement>({ box: "border-box" });
  const { ref: footerRef, height: footerHeight = 73 } =
    useResizeObserver<HTMLDivElement>({ box: "border-box" });

  return (
    <LandingContext.Provider
      value={{ headerRef, footerRef, headerHeight, footerHeight }}
    >
      {children}
    </LandingContext.Provider>
  );
};
