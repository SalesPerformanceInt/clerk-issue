import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar as SidebarComponent } from "./Sidebar";
import { SidebarItem as SidebarItemComponent } from "./SidebarItem";

import { ListBulletIcon } from "@radix-ui/react-icons";

const meta = {
  component: SidebarComponent,
} satisfies Meta<typeof SidebarComponent>;

type Story = StoryObj<typeof meta>;

export const Sidebar = {
  args: {
    children: (
      <>
        <SidebarItemComponent>
          <ListBulletIcon />
        </SidebarItemComponent>

        <SidebarItemComponent>
          <ListBulletIcon />
        </SidebarItemComponent>
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Story;

export default meta;
