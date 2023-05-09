import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { fadeAndCollapse } from "~/config/animations";

import { Choice } from "~/components/Question/components/QuestionVariant/components/Choice";

import type { MultipleChoiceChoicesProps } from "./MultipleChoiceChoices.types";

export const MultipleChoiceChoices = ({
  choices,
  selected,
  onChoiceSelect,
}: MultipleChoiceChoicesProps) => {
  if (!choices) return null;

  return (
    <AnimatePresence initial={false}>
      {choices
        ?.filter(
          ({ choice }) => !selected || choice._metadata.uid === selected.uid,
        )
        .map(({ choice }) => {
          return (
            <motion.div
              key={choice._metadata.uid}
              className="transition-spacing relative"
              variants={fadeAndCollapse}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Choice
                choice={choice}
                selected={choice._metadata.uid === selected?.uid}
                disabled={!!selected}
                onClick={() => onChoiceSelect({ choice })}
              />
            </motion.div>
          );
        })}
    </AnimatePresence>
  );
};
