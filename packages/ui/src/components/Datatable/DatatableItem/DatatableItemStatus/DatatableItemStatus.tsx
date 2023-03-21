import React from "react";

import classNames from "classnames";

import { MatchedMap } from "~/utils/matchedMap";

import { DatatableItemCell } from "../DatatableItemCell";
import type {
  DatatableItemStatusMap,
  DatatableItemStatusOptions,
  DatatableItemStatusProps,
} from "./DatatableItemStatus.types";

const statusMap = new MatchedMap<
  DatatableItemStatusOptions,
  DatatableItemStatusMap
>([
  ["published", { title: "Published", color: "text-primary-300" }],
  ["unpublished", { title: "Not Published", color: "" }],
  ["review", { title: "In Review", color: "text-accent-warn-400" }],
  ["error", { title: "Error", color: "text-accent-strong-400" }],
  ["_", { title: "Unknown", color: "" }],
]);

export const DatatableItemStatus = ({
  status,
  className,
}: DatatableItemStatusProps) => {
  if (!status) return null;

  const { color, title } = statusMap.get(status);

  return (
    <DatatableItemCell
      title={title}
      className={classNames(
        "flex flex-[1] items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-current",
        className,
        color,
      )}
    />
  );
};
