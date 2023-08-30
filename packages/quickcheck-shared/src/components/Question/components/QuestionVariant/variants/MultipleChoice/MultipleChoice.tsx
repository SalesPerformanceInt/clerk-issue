import React, { type FC } from "react";

import { MCQuestion } from "~/contentstack";

import { ResponsiveContainer } from "~/components";
import { Title } from "~/components/Question/components";
import { Choice } from "~/components/Question/components/QuestionVariant/components/Choice";

import { useMultipleChoices } from "./hooks/useMultipleChoice";

import { Body } from "../../components";

export type MultipleChoiceProps = {
  mcquestion: MCQuestion["mcquestion"];
};

export const MultipleChoice: FC<MultipleChoiceProps> = ({ mcquestion }) => {
  const { choices, onChoiceSelect, selected, submitted } = useMultipleChoices({
    mcquestion,
  });

  return (
    <>
      <ResponsiveContainer className="p-4 sm:py-6 sm:px-0 bg-background">
        <Title />
        <Body content={mcquestion.stem.replace(/<\/?[^>]+(>|$)/g, "")} />
      </ResponsiveContainer>
      <ResponsiveContainer className="bg-background-secondary">
        <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-8 sm:py-12">
          {choices.map(({ choice }) => (
            <Choice
              key={choice._metadata.uid}
              choice={choice}
              isSelected={choice._metadata.uid === selected?.value}
              disabled={!!submitted}
              onClick={() => onChoiceSelect({ choice })}
            />
          ))}
        </div>
      </ResponsiveContainer>
    </>
  );
};
