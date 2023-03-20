import type { Meta, StoryObj } from "@storybook/react";

import { Container as ContainerComponent } from "./Container";

const meta = {
  component: ContainerComponent,
  title: "Container/Container",
} satisfies Meta<typeof ContainerComponent>;

type Story = StoryObj<typeof meta>;

export const Container = {
  args: {
    children: "",
  },
} satisfies Story;

export default meta;
