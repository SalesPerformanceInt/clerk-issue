import React from "react";

import classNames from "classnames";

import type { SectionProps } from "./Section.types";

export const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={classNames("flex w-full flex-col py-8", className)}>
      {children}
    </section>
  );
};
