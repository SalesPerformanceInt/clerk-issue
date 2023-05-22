import React, { FC } from "react";

import { cleanHTML } from "~/utils/cleanHtml";

import { FadeOutText } from "~/components";
import { ChooseAnotherAnswer } from "~/components/Question/components/QuestionVariant/components/ChooseAnotherAnswer";
import { FeedbackSection } from "~/components/Question/components/QuestionVariant/components/FeedbackSection";

import { TFChoices } from "./components/TFChoices";
import { TFSelectedChoice } from "./components/TFSelectedChoice";

import { useTrueFalseQuestion } from "./hooks/useTrueFalseQuestion";

import type { TrueFalseQuestionProps } from "./TrueFalseQuestion.types";

export const TrueFalseQuestion: FC<TrueFalseQuestionProps> = ({
  tfquestion,
}: TrueFalseQuestionProps) => {
  const {
    isFeedbackActive,
    onChoiceSelect,
    onGoBackClick,
    selected,
    hasSelected,
    offset = 0,
  } = useTrueFalseQuestion({
    tfquestion,
  });

  return (
    <>
      <div className="mb-5">
        <FadeOutText
          text={tfquestion.prompt}
          hidden={hasSelected}
          className="mb-5 text-sm"
          liveEdit={tfquestion.$?.prompt}
        />

        <div
          className="question-stem mb-6 [&>*]:!mb-4 [&>*]:max-w-full [&>p]:text-2xl"
          dangerouslySetInnerHTML={{
            __html: cleanHTML(tfquestion.stem ?? ""),
          }}
          {...tfquestion.$?.stem}
        />

        <FadeOutText
          text={tfquestion.instruction}
          hidden={hasSelected}
          className="text-sm"
          liveEdit={tfquestion.$?.instruction}
        />
      </div>

      <div className="space-y-4">
        <TFSelectedChoice
          show={!isFeedbackActive && hasSelected}
          selected={selected}
          tfquestion={tfquestion}
        />

        <ChooseAnotherAnswer
          show={!isFeedbackActive && hasSelected}
          onGoBackClick={onGoBackClick}
        />

        <FeedbackSection />
      </div>
      <TFChoices
        show={!hasSelected}
        tfquestion={tfquestion}
        onChoiceSelect={onChoiceSelect}
        offset={offset}
      />
    </>
  );
};