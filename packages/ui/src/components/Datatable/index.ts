import { Datatable as DatatableComponent } from "./Datatable";
import { DatatableContent } from "./DatatableContent";
import { DatatableHeaderItem } from "./DatatableHeader/DatatableHeaderItem";
import { DatatableItem } from "./DatatableItem";
import { DatatableSelected } from "./DatatableSelected";

export const Datatable = Object.assign(DatatableComponent, {
  Selected: DatatableSelected,
  Content: DatatableContent,
  HeaderItem: DatatableHeaderItem,
  Item: DatatableItem,
});

export type { DatatableSelectedProps } from "./DatatableSelected";
