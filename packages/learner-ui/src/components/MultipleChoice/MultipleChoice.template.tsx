import React, { useState } from "react";

import type { Decorator } from "@storybook/react";

import type { ChoiceData, ChoiceProps } from "~/components/Choice";

import type { MultipleChoiceProps } from "./MultipleChoice.types";

export const MultipleChoiceDecorator: Decorator<MultipleChoiceProps> = (
  Story,
  { args },
) => {
  const [selected, setSelected] = useState<ChoiceData | null>(null);

  const onChoiceSelect = ({ choice }: Pick<ChoiceProps, "choice">) => {
    setSelected(selected ? null : choice);
  };

  const onGoBackClick = () => {
    setSelected(null);
  };

  return (
    <Story
      args={{
        ...args,
        selected,
        onChoiceSelect,
        onGoBackClick,
      }}
    />
  );
};
