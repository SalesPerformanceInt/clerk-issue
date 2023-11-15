import React, { useMemo, type FC } from "react";

import { DateTime } from "luxon";
import objectHash from "object-hash";
import { sortBy } from "remeda";

import { MCQuestion } from "~/contentstack";

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

  const date = DateTime.now().toISODate() ?? "";
  const deterministicallyRandomizedChoices = useMemo(
    () => sortBy(choices, ({ choice }) => objectHash({ date, ...choice })),
    [date, choices],
  );

  return (
    <>
      <ResponsiveContainer className="bg-background p-4 sm:px-0 sm:py-6">
        <Title />
        <Stem content={mcquestion.stem} />
      </ResponsiveContainer>
      <ResponsiveContainer className="bg-background-secondary">
        <div
          className="flex flex-col p-4 px-2 sm:grid sm:grid-cols-2 sm:gap-8 sm:py-12"
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
    </>
  );
};
