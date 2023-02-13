import React from "react";

import {
  Sidebar as SidebarComponent,
  SidebarItem as SidebarItemComponent,
} from "accelerate-cms-ui";

import { ListBulletIcon } from "@radix-ui/react-icons";

export const Sidebar = () => {
  return (
    <SidebarComponent>
      <SidebarItemComponent>
        <ListBulletIcon />
      </SidebarItemComponent>

      <SidebarItemComponent>
        <ListBulletIcon />
      </SidebarItemComponent>

      <SidebarItemComponent>
        <ListBulletIcon />
      </SidebarItemComponent>

      <SidebarItemComponent>
        <ListBulletIcon />
      </SidebarItemComponent>
    </SidebarComponent>
  );
};
