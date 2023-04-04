import { Datatable } from "accelerate-cms-ui";

import { formatDistanceStrict } from "date-fns";

import type { EntriesColumn } from "./types";

export const columnModifiedAt = (columnHelper: EntriesColumn) =>
  columnHelper.accessor("system.updated_at", {
    header: () => <Datatable.HeaderItem title="Modified At" />,
    cell: (info) => (
      <Datatable.Item.Cell
        title={formatDistanceStrict(new Date(info.getValue()), Date.now(), {
          addSuffix: true,
        })}
      />
    ),
  });
