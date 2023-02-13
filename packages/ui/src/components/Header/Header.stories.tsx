import type { Meta, StoryObj } from "@storybook/react";

import { Header as HeaderComponent } from "./Header";

const meta = {
  component: HeaderComponent,
} satisfies Meta<typeof HeaderComponent>;

type Story = StoryObj<typeof meta>;

export const Header = {
  args: {
    title: "Header",
    breadcrumbs: [
      {
        label: "Home",
        href: "#",
      },
      {
        label: "Entries",
        href: "",
      },
    ],
    contentLabel: "Collection Level 2",
  },
} satisfies Story;

export default meta;
