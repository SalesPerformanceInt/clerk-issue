import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ProgressCard as ProgressCardComponent } from "./ProgressCard";
import { ProgressCardDecorator } from "./ProgressCard.template";
import { ProgressCardItem as ProgressCardItemComponent } from "./ProgressCardItem";
import { ProgressCardItem } from "./ProgressCardItem/ProgressCardItem.stories";

const meta = {
  component: ProgressCardComponent,
  title: "ui/Progress Card",
  decorators: [ProgressCardDecorator],
} satisfies Meta<typeof ProgressCardComponent>;

type Story = StoryObj<typeof meta>;

export const ProgressCard = {
  args: {
    children: (
      <>
        <ProgressCardItemComponent {...ProgressCardItem.args} />
        <ProgressCardItemComponent {...ProgressCardItem.args} />
        <ProgressCardItemComponent {...ProgressCardItem.args} />
        <ProgressCardItemComponent {...ProgressCardItem.args} />
      </>
    ),
  },
  argTypes: {
    children: { control: { disable: true } },
    className: { control: { disable: true } },
  },
} satisfies Story;

export default meta;
