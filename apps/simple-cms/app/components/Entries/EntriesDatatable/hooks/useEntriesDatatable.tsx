import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import type { QuestionItem } from "~/models/questionItem";

import {
  columnActions,
  columnContentType,
  columnLanguage,
  columnModifiedAt,
  columnStatus,
  columnTitle,
  columnVersion,
} from "./columns";

export const useEntriesDatatable = (entries: QuestionItem[]) => {
  const columnHelper = createColumnHelper<QuestionItem>();

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
