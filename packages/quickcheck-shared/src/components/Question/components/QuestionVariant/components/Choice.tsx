import React from "react";

import { useQuestionContext } from "~qcs/index";
import parse from "html-react-parser";
import { twMerge } from "tailwind-merge";

import type { QuestionItemChoice } from "~qcs/contentstack";

import type { Expand } from "~qcs/utils/expand";

export type ChoiceProps = Expand<
  {
    isSelected?: boolean;
    disabled?: boolean;
    onClick: () => void;
  } & Pick<QuestionItemChoice, "choice">
>;

export const Choice = ({
  onClick,
  isSelected,
  disabled,
  choice,
}: ChoiceProps) => {
  const { selected, submitted } = useQuestionContext();

  if (!choice) return null;

  const correctlyAnswered = submitted && isSelected && selected?.correct;
  const incorrectlyAnswered = submitted && isSelected && !selected?.correct;
  const actualAnswer = submitted && !isSelected && choice.correct;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        "flex w-full items-start border-t border-primary-25 bg-background-secondary px-4 py-6 text-left transition last:border-b hover:border-primary disabled:hover:border-primary-25 sm:rounded-sm sm:border sm:border-highlight sm:px-8 sm:shadow-card",
        isSelected && "bg-background",
        correctlyAnswered &&
          "border-t-0 bg-success-50 disabled:hover:bg-success-50 sm:border-t",
        incorrectlyAnswered &&
          "border-l-8 border-t-0 border-l-warning bg-highlight disabled:hover:bg-highlight sm:border-l-16 sm:border-t sm:border-l-warning",
        actualAnswer &&
          "border-l-8 border-l-success sm:border-l-16 sm:border-l-success",
      )}
      {...choice.$?.body}
    >
      {parse(choice.body)}
    </button>
  );
};
