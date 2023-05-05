import React from "react";

import type { Decorator } from "@storybook/react";

import type { MultipleChoiceProps } from "./MultipleChoice.types";

export const MultipleChoiceDecorator: Decorator<MultipleChoiceProps> = (
  Story,
  { args },
) => {
  return (
    <Story
      args={{
        ...args,
      }}
    />
  );
};
