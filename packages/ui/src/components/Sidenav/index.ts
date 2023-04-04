import { Sidenav as SidenavComponent } from "./Sidenav";
import { SidenavList } from "./SidenavList";

export const Sidenav = Object.assign(SidenavComponent, { List: SidenavList });

export type { SidenavItemProps } from "./SidenavItem";
export type { SidenavListProps } from "./SidenavList";
export type { SidenavButtonProps } from "./SidenavButton";
