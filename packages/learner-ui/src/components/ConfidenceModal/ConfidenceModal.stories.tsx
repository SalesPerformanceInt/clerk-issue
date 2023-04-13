import type { Meta, StoryObj } from "@storybook/react";

import { ConfidenceModal as ConfidenceModalComponent } from "./ConfidenceModal";

const meta = {
  component: ConfidenceModalComponent,
  title: "Learner/ConfidenceModal",
} satisfies Meta<typeof ConfidenceModalComponent>;

type Story = StoryObj<typeof meta>;

export const ConfidenceModal = {
  args: {
    show: true,
  },
} satisfies Story;

export default meta;
