import React from "react";

import classNames from "classnames";

import type { DatatableItemCellProps } from "./DatatableItemCell.types";

export const DatatableItemCell = ({
  title,
  children,
  className,
}: DatatableItemCellProps) => {
  return (
    <td className={classNames("flex-[1]", className)}>
      {children}

      {title}
    </td>
  );
};
