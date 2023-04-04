import React from "react";

import classNames from "classnames";

import type { SideProps } from "./SideContainer.types";

export const Side = ({ children, className }: SideProps) => {
  return (
    <section
      className={classNames("flex h-full w-full bg-dark-700", className)}
    >
      {children}
    </section>
  );
};
