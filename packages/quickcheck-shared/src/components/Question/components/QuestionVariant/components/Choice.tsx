import React from "react";

import { useQuestionContext } from "~qcs/index";
import { AnimatePresence, motion } from "framer-motion";
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
        choice.correct && "text-teal-900",
        "relative flex w-full items-center border-t border-primary-25 bg-background-secondary px-4 py-6 text-left transition last:border-b hover:border-primary disabled:hover:border-primary-25 sm:rounded-sm sm:border sm:border-highlight sm:px-8 sm:shadow-card",
        isSelected &&
          "bg-background hover:border-primary-25 sm:hover:border-primary",
        correctlyAnswered &&
          "border-t-0 bg-success-50 disabled:hover:bg-success-50 sm:border-t",
      )}
      {...choice.$?.body}
    >
      <AnimatePresence>
        {(incorrectlyAnswered || actualAnswer) && (
          <motion.div
            variants={{
              initial: { width: 0 },
              animate: { width: 16, transition: { duration: 0.35 } },
            }}
            initial="initial"
            animate="animate"
            className={twMerge(
              "absolute inset-y-0 left-0 h-full",
              incorrectlyAnswered && "bg-warning",
              actualAnswer && "bg-success",
            )}
          />
        )}
      </AnimatePresence>
      {parse(choice.body)}
    </button>
  );
};
