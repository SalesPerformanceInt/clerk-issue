import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useMeasure } from "react-use";

import { useNavigation } from "@remix-run/react";

import { faArrowRight } from "@fortawesome/pro-light-svg-icons";
import { isNumber } from "remeda";

import { ResponsiveContainer } from "~/components";
import { useQuestionContext } from "~/components/Question";
import { Button } from "~/components/ui/Button";

import { Feedback } from "./Feedback";

const ActionButton: FC = () => {
  const { submitAnswer, hasSelected, submitted, onContinue, userData } =
    useQuestionContext();

  const { state } = useNavigation();
  const loading = state !== "idle";

  const { t } = useTranslation();

  const unansweredQuestions = userData?.unanswered_questions;
  const isLastQuestion =
    isNumber(unansweredQuestions) && unansweredQuestions <= 1;

  if (submitted && isLastQuestion)
    return (
      <Button
        loading={loading}
        rightIcon={faArrowRight}
        onClick={onContinue}
        className="bg-accent text-text"
      >
        {t("question.buttons.finish_up")}
      </Button>
    );

  if (submitted)
    return (
      <Button loading={loading} rightIcon={faArrowRight} onClick={onContinue}>
        {t("question.buttons.next_question")}
      </Button>
    );

  return (
    <Button
      loading={loading}
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
            <ActionButton />
          </div>
        </div>
      </ResponsiveContainer>
    </>
  );
};
