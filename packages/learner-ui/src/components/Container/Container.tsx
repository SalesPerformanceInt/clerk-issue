import React from "react";

import classNames from "classnames";

import type { ContainerProps } from "./Container.types";

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <section
      className={classNames("w-full  md:w-3/4 lg:w-2/3 xl:w-1/2", className)}
    >
      {children}
    </section>
  );
};
