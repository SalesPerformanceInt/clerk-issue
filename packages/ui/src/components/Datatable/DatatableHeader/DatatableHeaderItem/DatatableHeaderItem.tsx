import React from "react";

import classNames from "classnames";

import type { DatatableHeaderItemProps } from "./DatatableHeaderItem.types";

export const DatatableHeaderItem = ({
  title,
  className,
  children,
}: DatatableHeaderItemProps) => {
  return (
    <th className={classNames("flex-[1] font-semibold", className)}>
      {children}

      {title}
    </th>
  );
};
