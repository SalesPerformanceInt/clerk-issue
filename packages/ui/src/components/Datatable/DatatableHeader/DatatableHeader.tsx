import React, { Fragment } from "react";

import { flexRender } from "@tanstack/react-table";

import type { DatatableHeaderProps } from "./DatatableHeader.types";

export const DatatableHeader = ({ table }: DatatableHeaderProps) => {
  return (
    <thead className="flex w-full flex-col px-12 text-dark-200">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr
          key={headerGroup.id}
          className="flex w-full flex-wrap items-center border-b border-solid border-dark-400 py-6 text-left"
        >
          {headerGroup.headers.map((header) => (
            <Fragment key={header.id}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </Fragment>
          ))}
        </tr>
      ))}
    </thead>
  );
};
