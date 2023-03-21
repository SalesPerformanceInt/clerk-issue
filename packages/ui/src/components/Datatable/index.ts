import { Datatable as DatatableComponent } from "./Datatable";
import { DatatableContent } from "./DatatableContent";
import { DatatableSelected } from "./DatatableSelected";

export const Datatable = Object.assign(DatatableComponent, {
  Selected: DatatableSelected,
  Content: DatatableContent,
});

export type { DatatableSelectedProps } from "./DatatableSelected";
