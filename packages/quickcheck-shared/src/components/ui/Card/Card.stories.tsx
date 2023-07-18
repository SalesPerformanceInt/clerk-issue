import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Card as CardComponent } from "./Card";
import { CardDecorator } from "./Card.template";
import { CardTitle as CardTitleComponent } from "./CardTitle";
import { CardTitle } from "./CardTitle/CardTitle.stories";

const meta = {
  component: CardComponent,
  title: "ui/Card",
  decorators: [CardDecorator],
} satisfies Meta<typeof CardComponent>;

type Story = StoryObj<typeof meta>;

export const Card = {
  args: {
    children: "Card Content",
    className: "flex gap-6 p-6",
  },
  argTypes: {
    className: { control: { disable: true } },
  },
} satisfies Story;

export const CardWithTitle = {
  args: {
    children: <CardTitleComponent {...CardTitle.args} />,
    className: "flex flex-col gap-6 p-6",
  },
  argTypes: {
    children: { control: { disable: true } },
    className: { control: { disable: true } },
  },
} satisfies Story;

export default meta;
