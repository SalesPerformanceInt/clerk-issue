import React, { type FC } from "react";
import { useTranslation } from "react-i18next";
import { useMeasure } from "react-use";
import { useNavigation } from "@remix-run/react";

import { faArrowRight } from "@fortawesome/pro-light-svg-icons";
import { isNumber } from "remeda";
import { twMerge } from "tailwind-merge";

import { ResponsiveContainer } from "~qcs/components";
import { useQuestionContext } from "~qcs/components/Question";
import { Button } from "~qcs/components/ui/Button";

import { Feedback } from "./Feedback";

const ActionButton: FC = () => {
  const {
    submitAnswer,
    hasSelected,
    submitted,
    continued,
    onContinueClick,
    userData,
  } = useQuestionContext();

  const { state } = useNavigation();
  const loading = continued ? state === "loading" : state === "submitting";

  const { t } = useTranslation();

  const unansweredQuestions = userData?.unanswered_questions;
  const isLastQuestion =
    isNumber(unansweredQuestions) && unansweredQuestions <= 1;

  if (submitted && isLastQuestion)
    return (
      <Button
        loading={loading}
        rightIcon={faArrowRight}
        onClick={onContinueClick}
        className="bg-accent text-text"
      >
        {t("question.buttons.finish_up")}
      </Button>
    );

  if (submitted)
    return (
      <Button
        loading={loading}
        rightIcon={faArrowRight}
        onClick={onContinueClick}
      >
        {t("question.buttons.next_question")}
      </Button>
    );

  return (
    <Button
      disabled={!hasSelected}
      rightIcon={faArrowRight}
      onClick={submitAnswer}
    >
      {t("question.buttons.check_answer")}
    </Button>
  );
};

export const Action: FC = () => {
  const { offset } = useQuestionContext();

  const [ref, { height }] = useMeasure<HTMLDivElement>();

  return (
    <>
      <div style={{ height }} />

      <ResponsiveContainer ref={ref} className="fixed inset-x-0 bottom-0">
        <div
          style={offset ? { marginBottom: offset } : undefined}
          className="flex flex-col bg-primary p-4 sm:justify-between sm:px-12 sm:py-6"
        >
          <Feedback />

          <div
            className={twMerge(
              "flex items-end justify-end",
              offset && "justify-start",
            )}
          >
            <ActionButton />
          </div>
        </div>
      </ResponsiveContainer>
    </>
  );
};
