import { Datatable } from "accelerate-cms-ui";

import type { EntriesColumn } from "./types";

export const columnContentType = (columnHelper: EntriesColumn) =>
  columnHelper.accessor("content_type_uid", {
    header: () => <Datatable.HeaderItem title="Content-Type" />,

    cell: () => <Datatable.Item.Cell title="QuestionItem" />,
  });
