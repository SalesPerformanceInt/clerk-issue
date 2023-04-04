import React from "react";

import { DatatableHeader } from "../DatatableHeader";
import { DatatableItem } from "../DatatableItem";
import type { DatatableContentProps } from "./DatatableContent.types";

export const DatatableContent = ({ table }: DatatableContentProps) => {
  return (
    <table className="flex w-full flex-col bg-dark-500">
      <DatatableHeader table={table} />

      <tbody className="flex w-full flex-col py-4">
        {table.getRowModel().rows.map((row) => (
          <DatatableItem key={row.id} row={row} />
        ))}
      </tbody>
    </table>
  );
};
