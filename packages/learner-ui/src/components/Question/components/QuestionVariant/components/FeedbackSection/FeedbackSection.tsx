import React, { FC } from "react";
import { Doughnut } from "react-chartjs-2";

import { ArcElement, Chart as ChartJS } from "chart.js";
import { AnimatePresence, motion } from "framer-motion";

import { cleanHTML } from "~/utils/cleanHtml";

import { GreenCheckMedallion } from "~/components/images/GreenCheckMedallion";
import { RedCircleX } from "~/components/images/RedCircleX";

import type { FeedbackSectionProps } from "./FeedbackSection.types";

ChartJS.register(ArcElement);

export const FeedbackSection: FC<FeedbackSectionProps> = ({
  show,
  selected,
  currentTopic,
  totalScore,
  topicPercentage,
  children,
}) => {
  return (
    <AnimatePresence>
      {show && (
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
          {selected?.correct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1, duration: 1 },
              }}
              className="mt-6 flex flex-col items-center"
            >
              <p className="text-8xl font-thin text-lime-700">+25</p>
            </motion.div>
          )}
          <div className="mt-6 flex flex-col items-center">
            <p>
              Total Score:{" "}
              <strong className="text-lime-700">{totalScore}</strong>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-col">
              <p className="text-sm font-bold">Mastery:</p>
              <p className="text-lg">{currentTopic}</p>
            </div>
            <div className="relative h-32 w-32">
              <Doughnut
                options={{ cutout: "60%" }}
                data={{
                  datasets: [
                    {
                      data: [topicPercentage, 100 - topicPercentage],
                      backgroundColor: [
                        "rgba(229, 229, 229, 1)",
                        "rgba(229, 229, 229, 0)",
                      ],
                      borderColor: [
                        "rgba(229, 229, 229, 1)",
                        "rgba(229, 229, 229, 0)",
                      ],
                      borderWidth: 0,
                    },
                  ],
                }}
              />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-neutral-400">
                {`${topicPercentage}%`}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
