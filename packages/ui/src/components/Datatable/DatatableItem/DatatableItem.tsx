import React, { Fragment } from "react";

import { flexRender } from "@tanstack/react-table";

import type { DatatableItemProps } from "./DatatableItem.types";

export const DatatableItem = ({ row }: DatatableItemProps) => {
  return (
    <tr className="flex w-full flex-wrap items-center py-4 px-12 text-left text-light-200">
      {row.getVisibleCells().map((cell) => (
        <Fragment key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </Fragment>
      ))}
    </tr>
  );
};
