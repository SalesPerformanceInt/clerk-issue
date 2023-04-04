import type { Meta, StoryObj } from "@storybook/react";

import { Main as MainComponent } from "./MainContainer";

const meta = {
  component: MainComponent,
  title: "Container/Main",
} satisfies Meta<typeof MainComponent>;

type Story = StoryObj<typeof meta>;

export const Main = {
  args: {
    children: "",
  },
} satisfies Story;

export default meta;
