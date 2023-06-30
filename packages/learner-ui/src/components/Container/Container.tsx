import React from "react";

import { twMerge } from "tailwind-merge";

import type { ContainerProps } from "./Container.types";

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <section
      className={twMerge("w-full  md:w-3/4 lg:w-2/3 xl:w-1/2", className)}
    >
      {children}
    </section>
  );
};
