import type { Meta, StoryObj } from "@storybook/react";

import { Button as ButtonComponent } from "./Button";

const meta = {
  component: ButtonComponent.Outline,
} satisfies Meta<typeof ButtonComponent.Outline>;

type Story = StoryObj<typeof meta>;

export const ButtonOutline = {} satisfies Story;

export default meta;
