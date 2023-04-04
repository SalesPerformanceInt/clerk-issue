import { DatatableItem as DatatableItemComponent } from "./DatatableItem";
import { DatatableItemActions } from "./DatatableItemActions";
import { DatatableItemCell } from "./DatatableItemCell";
import { DatatableItemControl } from "./DatatableItemControl";
import { DatatableItemStatus } from "./DatatableItemStatus";

export const DatatableItem = Object.assign(DatatableItemComponent, {
  Cell: DatatableItemCell,
  Control: DatatableItemControl,
  Status: DatatableItemStatus,
  Actions: DatatableItemActions,
});
