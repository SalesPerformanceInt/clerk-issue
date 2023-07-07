import React from "react";

import { twMerge } from "tailwind-merge";
import type { QuestionItemChoice } from "~/contentstack";
import { useQuestionContext } from "~/index";

import type { Expand } from "~/utils/expand";
import { stripHTML } from "~/utils/stripHTML";

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

  const correctlyAnswered = submitted && isSelected && selected?.correct
  const incorrectlyAnswered = submitted &&  isSelected && !selected?.correct
  const actualAnswer = submitted && !isSelected && choice.correct

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        "transition bg-background-secondary hover:bg-background disabled:hover:bg-background-secondary border-primary-25 flex items-start border-t px-4 py-6 text-left last:border-b sm:px-8 sm:border sm:rounded-sm sm:border-highlight sm:shadow-card",
        isSelected && "bg-background",
        correctlyAnswered &&
          "bg-success-50 border-t-0 sm:border-t disabled:hover:bg-success-50",
        incorrectlyAnswered &&
          "bg-highlight disabled:hover:bg-highlight border-l-warning border-l-8 border-t-0 sm:border-t sm:border-l-16 sm:border-l-warning",
        actualAnswer &&
          "border-l-success border-l-8 sm:border-l-16 sm:border-l-success",
      )}
      {...choice.$?.body}

    >
      {stripHTML(choice.body)}
    </button>
  );
};
