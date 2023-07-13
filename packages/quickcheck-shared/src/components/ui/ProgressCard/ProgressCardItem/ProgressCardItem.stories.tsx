import type { Meta, StoryObj } from "@storybook/react";

import { ProgressCardItem as ProgressCardItemComponent } from "./ProgressCardItem";
import { ProgressCardItemDecorator } from "./ProgressCardItem.template";

const meta = {
  component: ProgressCardItemComponent,
  title: "ui/Progress Card/Progress Card Item",
  decorators: [ProgressCardItemDecorator],
} satisfies Meta<typeof ProgressCardItemComponent>;

type Story = StoryObj<typeof meta>;

export const ProgressCardItem = {
  args: {},
  argTypes: {
    className: { control: { disable: true } },
  },
} satisfies Story;

export default meta;
