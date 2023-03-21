import React from "react";

import classNames from "classnames";

import type { DatatableProps } from "./Datatable.types";

export const Datatable = ({ children, className }: DatatableProps) => {
  return (
    <section className={classNames("flex w-full overflow-auto", className)}>
      <div className="flex w-full min-w-[1240px] flex-col">{children}</div>
    </section>
  );
};
