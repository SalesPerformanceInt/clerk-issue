import { Datatable } from "accelerate-cms-ui";

import type { EntriesColumn } from "./types";

export const columnContentType = (columnHelper: EntriesColumn) =>
  columnHelper.accessor("contentType", {
    header: () => <Datatable.HeaderItem title="Content-Type" />,
    cell: (info) => <Datatable.Item.Cell title={info.getValue()} />,
  });
