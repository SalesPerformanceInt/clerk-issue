import { Datatable, MatchedMap, type ReverseMap } from "accelerate-cms-ui";

import type { EntriesColumn } from "./types";

export type StatusMap = {
  title: string;
  color: string;
};

const PublishStatusMap = {
  Published: "published",
  Unpublished: "unpublished",
  Review: "review",
  Error: "error",
};

export type PublishStatus = ReverseMap<typeof PublishStatusMap>;

const statusMap = new MatchedMap<PublishStatus, StatusMap>([
  ["published", { title: "Published", color: "text-primary-300" }],
  ["unpublished", { title: "Not Published", color: "" }],
  ["review", { title: "In Review", color: "text-accent-warn-400" }],
  ["error", { title: "Error", color: "text-accent-strong-400" }],
  ["_", { title: "Unknown", color: "" }],
]);

export const columnStatus = (columnHelper: EntriesColumn) =>
  columnHelper.accessor("system.uid", {
    header: () => <Datatable.HeaderItem title="Publish Status" />,
    cell: (info) => {
      const { title, color } = statusMap.get("published");

      return <Datatable.Item.Status status={title} className={color} />;
    },
  });
