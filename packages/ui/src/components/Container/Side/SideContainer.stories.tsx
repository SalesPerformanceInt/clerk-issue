import type { Meta, StoryObj } from "@storybook/react";

import { Side as SideComponent } from "./SideContainer";

const meta = {
  component: SideComponent,
  title: "Container/Side",
} satisfies Meta<typeof SideComponent>;

type Story = StoryObj<typeof meta>;

export const Side = {
  args: {
    children: "",
  },
} satisfies Story;

export default meta;
