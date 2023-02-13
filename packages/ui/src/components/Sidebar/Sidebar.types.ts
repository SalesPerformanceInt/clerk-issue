import type { ReactElement } from "react";

import type { SidebarItemProps } from "./SidebarItem/SidebarItem.types";

export type SidebarProps = {
  children: ReactElement<SidebarItemProps> | ReactElement<SidebarItemProps>[];
};
