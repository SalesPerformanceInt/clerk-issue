import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useMeasure } from "react-use";

import { useNavigation } from "@remix-run/react";

import { faArrowRight } from "@fortawesome/pro-light-svg-icons";

import { ResponsiveContainer } from "~/components";
import { useQuestionContext } from "~/components/Question";
import { Button } from "~/components/ui/Button";

import { Feedback } from "./Feedback";

export const Action: FC = () => {
  const { submitAnswer, hasSelected, submitted, onContinue, offset } =
    useQuestionContext();

  const [ref, { height }] = useMeasure<HTMLDivElement>();

  const { state } = useNavigation();
  const loading = state !== "idle";

  const { t } = useTranslation();

  return (
    <>
      <div style={{ height }} />
      <ResponsiveContainer
        ref={ref}
        className="bg-primary absolute inset-x-0 bottom-0"
      >
        <div
          style={offset ? { marginBottom: offset } : undefined}
          className="flex flex-col p-4 sm:flex-row sm:justify-between sm:py-6 sm:px-0"
        >
          <Feedback />
          <div className="flex items-end">
            {submitted ? (
              <Button
                loading={loading}
                rightIcon={faArrowRight}
                onClick={onContinue}
              >
                {t("question.buttons.next_question")}
              </Button>
            ) : (
              <Button
                loading={loading}
                disabled={!hasSelected}
                rightIcon={faArrowRight}
                onClick={submitAnswer}
              >
                {t("question.buttons.check_answer")}
              </Button>
            )}
          </div>
        </div>
      </ResponsiveContainer>
    </>
  );
};
