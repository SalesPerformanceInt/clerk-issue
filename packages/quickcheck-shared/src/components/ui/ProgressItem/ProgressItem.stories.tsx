import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Card, CardTitle } from "~/components/ui/Card";

import { ProgressItem as ProgressItemComponent } from "./ProgressItem";
import { ProgressItemDecorator } from "./ProgressItem.template";

const meta = {
  component: ProgressItemComponent,
  title: "ui/Progress",
  decorators: [ProgressItemDecorator],
} satisfies Meta<typeof ProgressItemComponent>;

type Story = StoryObj<typeof meta>;

/**
 * Progress Item
 */

export const ProgressItem = {
  args: {
    id: "Progress Item 1",
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

/**
 * Progress Card
 */

export const ProgressCard = {
  render: (args) => (
    <Card className="flex w-96 flex-col">
      <CardTitle qty={4} title="Active Enrollments" className="p-6 pb-0" />

      <ProgressItemComponent {...args} />
      <ProgressItemComponent {...args} />
      <ProgressItemComponent {...args} />
      <ProgressItemComponent {...args} />
    </Card>
  ),
  args: {
    id: "Progress Card 2",
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
