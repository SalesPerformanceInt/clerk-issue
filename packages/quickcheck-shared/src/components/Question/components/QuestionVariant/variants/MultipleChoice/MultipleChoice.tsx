import React, { type FC } from "react";

import { MCQuestion } from "~/contentstack";

import { useDeterministicallyRandomizeChoices } from "~/utils/deterministicallyRandomizeChoices";

import { ResponsiveContainer } from "~/components";
import { Title } from "~/components/Question/components";
import { Choice } from "~/components/Question/components/QuestionVariant/components/Choice";

import { useMultipleChoices } from "./hooks/useMultipleChoice";

import { Stem } from "../../components";

export type MultipleChoiceProps = {
  mcquestion: MCQuestion["mcquestion"];
};

export const MultipleChoice: FC<MultipleChoiceProps> = ({ mcquestion }) => {
  const { choices, onChoiceSelect, selected, submitted } = useMultipleChoices({
    mcquestion,
  });

  const deterministicallyRandomizedChoices =
    useDeterministicallyRandomizeChoices(choices);

  return (
    <main>
      <ResponsiveContainer className="bg-background p-4 sm:px-0 sm:py-6">
        <Title />
        <Stem content={mcquestion.stem} />
      </ResponsiveContainer>
      <ResponsiveContainer className="bg-background-secondary">
        <div
          className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-8 sm:py-12"
          data-testid="QuestionItem-Choices"
        >
          {deterministicallyRandomizedChoices.map(({ choice }, index) => (
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
    </main>
  );
};
