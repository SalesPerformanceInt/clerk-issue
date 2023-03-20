import React from "react";

import classNames from "classnames";

import type { ContainerProps } from "./Container.types";

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <section
      className={classNames(
        "flex h-full w-full flex-[1] flex-col overflow-auto",
        className,
      )}
    >
      {children}
    </section>
  );
};
