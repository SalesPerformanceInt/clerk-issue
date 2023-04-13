import type { Meta, StoryObj } from "@storybook/react";

import { Confetti as ConfettiComponent } from "./Confetti";

const meta = {
  component: ConfettiComponent,
  title: "Learner/Confetti",
} satisfies Meta<typeof ConfettiComponent>;

type Story = StoryObj<typeof meta>;

export const Confetti = {
  args: {},
} satisfies Story;

export default meta;
