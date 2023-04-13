import type { Meta, StoryObj } from "@storybook/react";

import { Header as HeaderComponent } from "./Header";
import { HeaderDecorator } from "./Header.template";

const meta = {
  component: HeaderComponent,
  title: "Learner/Header",
  decorators: [HeaderDecorator],
} satisfies Meta<typeof HeaderComponent>;

type Story = StoryObj<typeof meta>;

export const Header = {
  args: {
    currentTopic: "Access Power",
  },
} satisfies Story;

export default meta;
