import React, { FC } from "react";
import { useMeasure } from "react-use";

import { faArrowRight } from "@fortawesome/pro-light-svg-icons";

import { useQuestionContext } from "~/components/Question";
import { Button } from "~/components/ui/button";

import { Feedback } from "./Feedback";
import { ResponsiveContainer } from "~/components";

export const Action: FC = () => {
  const { submitAnswer, hasSelected, submitted, onContinue } =
    useQuestionContext();

  const [ref, { height }] = useMeasure<HTMLDivElement>();

  return (
    <>
      <div style={{ height }} />
      <ResponsiveContainer ref={ref} className="bg-primary absolute inset-x-0 bottom-0">
        <div className="flex flex-col p-4 sm:flex-row sm:justify-between sm:py-6 sm:px-0">
          <Feedback />
          <div className="flex items-end">
          {submitted ? (
            <Button rightIcon={faArrowRight} onClick={onContinue}>
              Next Question
            </Button>
          ) : (
            <Button
              disabled={!hasSelected}
              rightIcon={faArrowRight}
              onClick={submitAnswer}
            >
              Check Answer
            </Button>
          )}
          </div>
        </div>
      </ResponsiveContainer>
    </>
  );
};
