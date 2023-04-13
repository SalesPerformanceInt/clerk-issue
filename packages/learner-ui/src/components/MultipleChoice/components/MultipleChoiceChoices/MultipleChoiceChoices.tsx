import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import hash from "object-hash";

import { Choice } from "~/components/Choice";

import { fadeAndCollapse } from "../../animations";
import type { MultipleChoiceChoicesProps } from "./MultipleChoiceChoices.types";

export const MultipleChoiceChoices = ({
  choices,
  selected,
  feedback,
  onChoiceSelect,
}: MultipleChoiceChoicesProps) => {
  return (
    <AnimatePresence initial={false}>
      {choices
        .filter(({ choice }) => !selected || hash(choice) === hash(selected))
        .map(({ choice }) => {
          const choiceHash = hash(choice);

          return (
            <motion.div
              key={choiceHash}
              className="transition-spacing relative"
              variants={fadeAndCollapse}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Choice
                choice={choice}
                selected={choiceHash === hash(selected)}
                disabled={feedback}
                onClick={() => onChoiceSelect({ choice })}
              />
            </motion.div>
          );
        })}
    </AnimatePresence>
  );
};
