import { formatDistanceStrict } from "date-fns";

import { Datatable } from "accelerate-cms-ui";

import type { EntriesColumn } from "./types";

export const columnModifiedAt = (columnHelper: EntriesColumn) =>
  columnHelper.accessor("updated_at", {
    header: () => <Datatable.HeaderItem title="Modified At" />,

    cell: ({ row }) => {
      const { updated_at, created_at } = row.original;

      const modifiedAt = formatDistanceStrict(
        new Date(updated_at || created_at),
        Date.now(),
        { addSuffix: true },
      );

      return <Datatable.Item.Cell title={modifiedAt} />;
    },
  });
