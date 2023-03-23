import { Datatable } from "accelerate-cms-ui";

import type { EntriesColumn } from "./types";

export const columnLanguage = (columnHelper: EntriesColumn) =>
  columnHelper.accessor("language", {
    header: () => (
      <Datatable.HeaderItem title="Language" className="flex-[1.5]" />
    ),
    cell: (info) => (
      <Datatable.Item.Cell title={info.getValue()} className="flex-[1.5]" />
    ),
  });
