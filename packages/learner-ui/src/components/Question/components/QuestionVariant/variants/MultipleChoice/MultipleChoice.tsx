import React, { type FC } from "react";

import { cleanHTML } from "~/utils/cleanHtml";

import { FadeOutText } from "~/components";
import { ChooseAnotherAnswer } from "~/components/Question/components/QuestionVariant/components/ChooseAnotherAnswer";
import { FeedbackSection } from "~/components/Question/components/QuestionVariant/components/FeedbackSection";

import { MultipleChoiceChoices } from "./components/MultipleChoiceChoices";

import { useMultipleChoices } from "./hooks/useMultipleChoice";

import type { MultipleChoiceProps } from "./MultipleChoice.types";

export const MultipleChoice: FC<MultipleChoiceProps> = ({ mcquestion }) => {
  const {
    choices,
    isFeedbackActive,
    onChoiceSelect,
    onGoBackClick,
    selected,
    hasSelected,
  } = useMultipleChoices({
    mcquestion,
  });

  return (
    <>
      <div className="mb-5">
        <FadeOutText
          text={mcquestion.prompt}
          hidden={hasSelected}
          className="mb-5 text-sm"
          liveEdit={mcquestion.$?.prompt}
        />

        <div
          className="question-stem mb-6 [&>*]:!mb-4 [&>*]:max-w-full [&>p]:text-2xl"
          dangerouslySetInnerHTML={{
            __html: cleanHTML(mcquestion.stem),
          }}
          {...mcquestion.$?.stem}
        />

        <FadeOutText
          text={mcquestion.instruction}
          hidden={hasSelected}
          className="text-sm"
          liveEdit={mcquestion.$?.instruction}
        />
      </div>

      <div className="space-y-4">
        <MultipleChoiceChoices
          choices={choices}
          selected={selected}
          onChoiceSelect={onChoiceSelect}
        />

        <ChooseAnotherAnswer
          show={!isFeedbackActive && !!selected}
          onGoBackClick={onGoBackClick}
        />

        <FeedbackSection />
      </div>
    </>
  );
};