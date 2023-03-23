import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import type { EntriesType } from "~/data/entries";

import {
  columnActions,
  columnContentType,
  columnLanguage,
  columnModifiedAt,
  columnStatus,
  columnTitle,
  columnVersion,
} from "./columns";

export const useEntriesDatatable = (entries: EntriesType[]) => {
  const columnHelper = createColumnHelper<EntriesType>();

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
