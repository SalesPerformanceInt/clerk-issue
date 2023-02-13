import type { Meta, StoryObj } from "@storybook/react";

import { ContentLabel as ContentLabelComponent } from "./ContentLabel";

const meta = {
  component: ContentLabelComponent,
} satisfies Meta<typeof ContentLabelComponent>;

type Story = StoryObj<typeof meta>;

export const ContentLabel = {
  args: {
    label: "Collection Level 2",
  },
} satisfies Story;

export default meta;
