import React from "react";

import { DatatableItemActions } from "./DatatableItemActions";
import { DatatableItemCell } from "./DatatableItemCell";
import { DatatableItemControl } from "./DatatableItemControl";
import { DatatableItemStatus } from "./DatatableItemStatus";

export const DatatableItem = () => {
  return (
    <tr className="flex w-full flex-wrap items-center py-4 px-12 text-left text-light-200">
      <DatatableItemControl
        title="Random Entry"
        className="flex-[2]"
        id="random-entry"
        name="random-entry"
        value="random-entry"
      />

      <DatatableItemCell
        title="English - United States"
        className="flex-[1.5]"
      />

      <DatatableItemCell title="Colection" />

      <DatatableItemCell title="1.2.14" className="flex-[0.75]" />

      <DatatableItemStatus status="unpublished" />

      <DatatableItemCell title="2 Hours Ago" />

      <DatatableItemActions />
    </tr>
  );
};
