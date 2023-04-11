import { Datatable } from "accelerate-cms-ui";

import type { EntriesColumn } from "./types";

export const columnActions = (columnHelper: EntriesColumn) =>
  columnHelper.accessor("created_at", {
    header: () => <Datatable.HeaderItem className="!flex-[0.75]" />,

    cell: () => <Datatable.Item.Actions className="!flex-[0.75]" />,
  });
