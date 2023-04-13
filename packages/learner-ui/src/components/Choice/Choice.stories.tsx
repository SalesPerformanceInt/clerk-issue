import type { Meta, StoryObj } from "@storybook/react";

import { Choice as ChoiceComponent } from "./Choice";

const meta = {
  component: ChoiceComponent,
  title: "Learner/Choice",
} satisfies Meta<typeof ChoiceComponent>;

type Story = StoryObj<typeof meta>;

export const Choice = {
  args: {
    selected: false,
    disabled: false,
    choice: {
      body: "Choice 1",
      correct: false,
    },
  },
} satisfies Story;

export default meta;
