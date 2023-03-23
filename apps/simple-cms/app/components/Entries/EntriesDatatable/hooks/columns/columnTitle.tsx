import { Datatable, Form } from "accelerate-cms-ui";

import type { EntriesColumn } from "./types";

export const columnTitle = (columnHelper: EntriesColumn) =>
  columnHelper.accessor("title", {
    header: ({ table, header }) => (
      <Datatable.HeaderItem
        title="Title"
        className="flex flex-[2] items-center gap-2"
      >
        <Form.Checkbox
          id={header.id}
          name="entries"
          value="all"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      </Datatable.HeaderItem>
    ),
    cell: ({ row, getValue, cell }) => (
      <Datatable.Item.Control
        title={getValue()}
        className="flex-[2]"
        id={cell.id}
        name="entries"
        value={getValue()}
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  });
