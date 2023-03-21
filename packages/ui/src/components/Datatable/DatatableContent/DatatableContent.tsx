import React from "react";

import { DatatableHeader } from "../DatatableHeader";
import { DatatableItem } from "../DatatableItem";

export const DatatableContent = () => {
  return (
    <table className="flex w-full flex-col bg-dark-500">
      <DatatableHeader />

      <tbody className="flex w-full flex-col py-4">
        <DatatableItem />
      </tbody>
    </table>
  );
};
