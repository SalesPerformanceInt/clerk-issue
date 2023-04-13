import type { Meta, StoryObj } from "@storybook/react";

import { MultipleChoice as MultipleChoiceComponent } from "./MultipleChoice";
import { MultipleChoiceDecorator } from "./MultipleChoice.template";

const meta = {
  component: MultipleChoiceComponent,
  title: "Learner/MultipleChoice",
  decorators: [MultipleChoiceDecorator],
} satisfies Meta<typeof MultipleChoiceComponent>;

type Story = StoryObj<typeof meta>;

export const MultipleChoice = {
  args: {
    question: {
      choices: [
        {
          body: "Choice 1",
          correct: true,
        },
        {
          body: "Choice 2",
          correct: false,
        },
      ],
      instruction: "Instruction",
      prompt: "Prompt",
      stem: "Stem",
    },
    showConfidence: false,
    selected: null,
  },
  argTypes: {
    selected: {
      control: false,
    },
  },
} satisfies Story;

export default meta;
