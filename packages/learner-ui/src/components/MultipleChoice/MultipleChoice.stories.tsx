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
    currentTopic: "Foo Bar the Topic",
    totalScore: 1200,
    topicPercentage: 77,
    question: {
      __typename: "QuestionitemVariantsMcquestionBlock",
      choices: [
        {
          __typename: "QuestionitemVariantsMcquestionBlockChoicesChoice",
          choice: {
            __typename: "QuestionitemVariantsMcquestionBlockChoicesChoiceBlock",
            body: "Choice 1",
            correct: true,
            feedback: "Feedback for Chocie 1.",
          },
        },
        {
          __typename: "QuestionitemVariantsMcquestionBlockChoicesChoice",
          choice: {
            __typename: "QuestionitemVariantsMcquestionBlockChoicesChoiceBlock",
            body: "Choice 2",
            correct: false,
            feedback: "Feedback for Chocie 2.",
          },
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
