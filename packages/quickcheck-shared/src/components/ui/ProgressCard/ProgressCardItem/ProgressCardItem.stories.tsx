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
  args: {
    title: "Six Critical Skills",
    ranking: "1",
    score: "1,234",
    progress: {
      attempted: 8,
      retired: 2,
      total: 20,
    },
  },
  argTypes: {},
} satisfies Story;

export default meta;
