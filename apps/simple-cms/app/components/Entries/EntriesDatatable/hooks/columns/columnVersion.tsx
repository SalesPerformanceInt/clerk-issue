import { Datatable } from "accelerate-cms-ui";

import type { EntriesColumn } from "./types";

export const columnVersion = (columnHelper: EntriesColumn) =>
  columnHelper.accessor("_version", {
    header: () => (
      <Datatable.HeaderItem title="Version" className="!flex-[0.75]" />
    ),

    cell: ({ getValue }) => (
      <Datatable.Item.Cell
        title={getValue().toString()}
        className="!flex-[0.75]"
      />
    ),
  });
