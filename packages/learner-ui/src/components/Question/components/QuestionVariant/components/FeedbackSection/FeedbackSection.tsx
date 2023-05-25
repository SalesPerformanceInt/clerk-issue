import React, { FC } from "react";

import { ArcElement, Chart as ChartJS } from "chart.js";
import { AnimatePresence, motion } from "framer-motion";

import { cleanHTML } from "~/utils/cleanHtml";

import { Button } from "~/components";
import { useQuestionContext } from "~/components/Question";
import { GreenCheckMedallion } from "~/components/images/GreenCheckMedallion";
import { RedCircleX } from "~/components/images/RedCircleX";

import type { FeedbackSectionProps } from "./FeedbackSection.types";

ChartJS.register(ArcElement);

export const FeedbackSection: FC<FeedbackSectionProps> = ({ children }) => {
  const { goOnBreak, isFeedbackActive, selected, onContinue } =
    useQuestionContext();
  return (
    <AnimatePresence>
      {isFeedbackActive && (
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.25 },
          }}
        >
          <div className="flex items-center space-x-2">
            {selected?.correct ? (
              <>
                <GreenCheckMedallion
                  className="h-5 w-5 rounded-full"
                  alt="Correct"
                />
                <p className="text-sm font-bold text-lime-700">Correct</p>
              </>
            ) : (
              <>
                <RedCircleX className="h-5 w-5 rounded-full" alt="Incorrect" />
                <p className="text-sm font-bold text-orange-700">Incorrect</p>
              </>
            )}
          </div>

          {children}

          <div
            {...selected?.feedbackLiveEdit}
            className="mt-6 text-sm"
            dangerouslySetInnerHTML={{
              __html: cleanHTML(selected?.feedback ?? ""),
            }}
          />
          <div className="mt-14 flex justify-center space-x-5">
            <Button
              onClick={goOnBreak}
              className="max-w-[100px] flex-1 bg-stone-300 hover:bg-stone-400"
            >
              Take a break
            </Button>
            <Button
              onClick={onContinue}
              className="max-w-[200px] bg-lime-200 hover:bg-lime-300"
            >
              Continue
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
