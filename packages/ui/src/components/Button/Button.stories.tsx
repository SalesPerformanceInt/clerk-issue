import type { Meta, StoryObj } from "@storybook/react";

import { Button as ButtonComponent } from "./Button";

const meta = {
  component: ButtonComponent,
} satisfies Meta<typeof ButtonComponent>;

type Story = StoryObj<typeof meta>;

export const Button = {} satisfies Story;

export default meta;
