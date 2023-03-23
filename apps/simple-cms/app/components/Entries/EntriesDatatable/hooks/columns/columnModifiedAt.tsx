import { Datatable } from "accelerate-cms-ui";

import type { EntriesColumn } from "./types";

export const columnModifiedAt = (columnHelper: EntriesColumn) =>
  columnHelper.accessor("modifiedAt", {
    header: () => <Datatable.HeaderItem title="Modified At" />,
    cell: (info) => <Datatable.Item.Cell title={info.getValue()} />,
  });
