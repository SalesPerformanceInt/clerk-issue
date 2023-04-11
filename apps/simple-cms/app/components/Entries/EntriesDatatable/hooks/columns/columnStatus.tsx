import { Datatable, MatchedMap } from "accelerate-cms-ui";

import type { EntriesColumn } from "./types";

/**
 * Status Map
 */

export type StatusMap = {
  title: string;
  color: string;
};

const statusMap = new MatchedMap<boolean, StatusMap>([
  [true, { title: "Published", color: "text-primary-300" }],
  [false, { title: "Not Published", color: "" }],
]);

/**
 * Column Status Definition
 */

export const columnStatus = (columnHelper: EntriesColumn) =>
  columnHelper.accessor("publish_details", {
    header: () => <Datatable.HeaderItem title="Publish Status" />,

    cell: ({ getValue }) => {
      const { title, color } = statusMap.get(!!getValue().length);

      return <Datatable.Item.Status status={title} className={color} />;
    },
  });
