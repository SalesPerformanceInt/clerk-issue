import React from "react";

import classNames from "classnames";

import type { MainProps } from "./MainContainer.types";

export const Main = ({ children, className }: MainProps) => {
  return (
    <section
      className={classNames(
        "flex h-full w-full flex-[1] flex-wrap overflow-auto bg-dark-600",
        className,
      )}
    >
      {children}
    </section>
  );
};
