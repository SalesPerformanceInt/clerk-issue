import { Datatable } from "accelerate-cms-ui";

import type { EntriesColumn } from "./types";

export const columnContentType = (columnHelper: EntriesColumn) =>
  columnHelper.accessor("system.content_type_uid", {
    header: () => <Datatable.HeaderItem title="Content-Type" />,
    cell: (info) => <Datatable.Item.Cell title="QuestionItem" />,
  });
