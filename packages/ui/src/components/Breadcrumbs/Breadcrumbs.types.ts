import type { Expand } from "~/utils/expand";

import type { BreadcrumbsItemProps } from "./BreadcrumbsItem/BreadcrumbsItem.types";

export type BreadcrumbsProps = {
  items: Expand<Omit<BreadcrumbsItemProps, "metaContent">>[];
};
