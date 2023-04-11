import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import type { Entry } from "~/models/entry";

import {
  columnActions,
  columnContentType,
  columnLanguage,
  columnModifiedAt,
  columnStatus,
  columnTitle,
  columnVersion,
} from "./columns";

export const useEntriesDatatable = (entries: Entry[]) => {
  const columnHelper = createColumnHelper<Entry>();

  const columns = [
    columnTitle(columnHelper),
    columnLanguage(columnHelper),
    columnContentType(columnHelper),
    columnVersion(columnHelper),
    columnStatus(columnHelper),
    columnModifiedAt(columnHelper),
    columnActions(columnHelper),
  ];

  const table = useReactTable({
    data: entries,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return { table };
};
