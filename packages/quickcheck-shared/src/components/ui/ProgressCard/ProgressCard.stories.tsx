import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ProgressCard as ProgressCardComponent } from "./ProgressCard";
import { ProgressCardDecorator } from "./ProgressCard.template";
import { ProgressCardItem as ProgressCardItemComponent } from "./ProgressCardItem";

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
        <ProgressCardItemComponent
          title="Six Critical Skills"
          ranking="1"
          score="1,234"
          progress={{ retired: 2, attempted: 8, total: 20 }}
        />

        <ProgressCardItemComponent
          title="Consensus Building"
          ranking="2"
          score="4,567"
          progress={{ retired: 42, attempted: 123, total: 300 }}
        />

        <ProgressCardItemComponent
          title="Sprint Selling"
          ranking="50"
          score="8,901"
          progress={{ retired: 42, attempted: 123, total: 300 }}
        />

        <ProgressCardItemComponent
          title="Six Critical Skills"
          ranking="3"
          score="1,234"
          progress={{ retired: 42, attempted: 123, total: 300 }}
        />
      </>
    ),
  },
  argTypes: {
    children: { control: { disable: true } },
    className: { control: { disable: true } },
  },
} satisfies Story;

export default meta;
