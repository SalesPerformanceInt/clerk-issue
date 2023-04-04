import React from "react";

import classNames from "classnames";

import { DatatableItemCell } from "../DatatableItemCell";
import type { DatatableItemStatusProps } from "./DatatableItemStatus.types";

export const DatatableItemStatus = ({
  status,
  className,
}: DatatableItemStatusProps) => {
  if (!status) return null;

  return (
    <DatatableItemCell
      title={status}
      className={classNames(
        "flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-current",
        className,
      )}
    />
  );
};
