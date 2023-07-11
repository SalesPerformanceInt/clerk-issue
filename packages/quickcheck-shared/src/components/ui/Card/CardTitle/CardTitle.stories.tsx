import type { Meta, StoryObj } from "@storybook/react";

import { CardTitle as CardTitleComponent } from "./CardTitle";
import { CardTitleDecorator } from "./CardTitle.template";

const meta = {
  component: CardTitleComponent,
  title: "ui/Card/Card Title",
  decorators: [CardTitleDecorator],
} satisfies Meta<typeof CardTitleComponent>;

type Story = StoryObj<typeof meta>;

export const CardTitle = {
  args: {
    qty: 4,
    title: "Card Title",
  },
  argTypes: {},
} satisfies Story;

export default meta;
