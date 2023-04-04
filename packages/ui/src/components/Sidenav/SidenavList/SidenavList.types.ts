import { SidenavButtonProps } from "../SidenavButton/SidenavButton.types";
import { SidenavItemProps } from "../SidenavItem/SidenavItem.types";

export type SidenavListProps = {
  buttonTitle?: SidenavButtonProps["title"];
  listTitle: string;
  items: Pick<SidenavItemProps, "id" | "name">[];
  currentItemId?: string;

  handleClick?: (id: string) => void;
};
