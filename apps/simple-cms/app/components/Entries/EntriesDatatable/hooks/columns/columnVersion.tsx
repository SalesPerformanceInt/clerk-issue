import { Datatable } from "accelerate-cms-ui";

import type { EntriesColumn } from "./types";

export const columnVersion = (columnHelper: EntriesColumn) =>
  columnHelper.accessor("version", {
    header: () => (
      <Datatable.HeaderItem title="Version" className="flex-[0.75]" />
    ),
    cell: (info) => (
      <Datatable.Item.Cell title={info.getValue()} className="flex-[0.75]" />
    ),
  });
