import React, { FC } from "react";

import { faCheckCircle, faTimesCircle } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { grow } from "~/config/animations";

import { stripHTML } from "~/utils/stripHTML";

import { useQuestionContext } from "~/components/Question";

const Correct = () => (
  <div className="text-success-50 flex items-center space-x-4 font-bold">
    <FontAwesomeIcon icon={faCheckCircle} />
    <p className="text-bold">That's the best choice!</p>
  </div>
);

const Incorrect = () => (
  <div className="text-warning-50 flex items-center space-x-4 font-bold">
    <FontAwesomeIcon icon={faTimesCircle} />
    <p className="text-bold">That’s not the best choice.</p>
  </div>
);

export const Feedback: FC = () => {
  const { selected, submitted } = useQuestionContext();

  return (
    <div className="flex-1">
      <AnimatePresence>
        {submitted && (
          <motion.div
            variants={grow}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col space-y-4 mb-4 sm:mb-0 sm:mr-12"
          >
            {selected?.correct ? <Correct /> : <Incorrect />}
            <p className="text-contrast text-base">
              {stripHTML(selected?.feedback)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
