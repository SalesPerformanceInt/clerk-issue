import type { Meta, StoryObj } from "@storybook/react";

import { Header as HeaderComponent } from "./Header";

const meta = {
  component: HeaderComponent,
} satisfies Meta<typeof HeaderComponent>;

type Story = StoryObj<typeof meta>;

export const Header = {} satisfies Story;

export default meta;
