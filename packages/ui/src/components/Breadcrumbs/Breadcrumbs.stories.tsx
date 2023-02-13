import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumbs as BreadcrumbsComponent } from "./Breadcrumbs";

const meta = {
  component: BreadcrumbsComponent,
} satisfies Meta<typeof BreadcrumbsComponent>;

type Story = StoryObj<typeof meta>;

export const Breadcrumbs = {
  args: {
    items: [
      {
        label: "Home",
        href: "#",
      },
      {
        label: "Entries",
        href: "",
      },
    ],
  },
} satisfies Story;

export default meta;
