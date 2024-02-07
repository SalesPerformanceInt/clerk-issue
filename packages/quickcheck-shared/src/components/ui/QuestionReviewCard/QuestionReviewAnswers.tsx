import React, { useState, type FC } from "react";
import { useTranslation } from "react-i18next";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import parse from "html-react-parser";

import { cn } from "~qcs/utils";
import type { RestrictQuestionItemVariant } from "~qcs/utils/getVariant";

import { Button } from "~qcs/components/ui/Button";

/**
 * Question Review Answers Props
 */

export type QuestionReviewAnswersProps = {
  questionVariant: RestrictQuestionItemVariant<"mcquestion">;
};

/**
 * Question Review Answers Component
 */

export const QuestionReviewAnswers: FC<QuestionReviewAnswersProps> = ({
  questionVariant,
}) => {
  const [cardOpen, setCardOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <Collapsible open={cardOpen} onOpenChange={setCardOpen}>
      <CollapsibleContent className="mb-4 flex flex-col gap-4">
        {questionVariant?.mcquestion.choices.map(({ choice }) => (
          <div
            key={choice._metadata.uid}
            className={cn(
              "flex flex-col gap-4 border-l-2 border-l-secondary p-4",
              choice.correct && "border-none bg-success-50",
            )}
          >
            <p className="font-bold text-text">"{parse(choice.body)}"</p>

            <span className="text-text">{parse(choice.feedback)}</span>
          </div>
        ))}
      </CollapsibleContent>

      <CollapsibleTrigger asChild className="w-full">
        {cardOpen ? (
          <Button> {t("enrollment.skill.hide_responses")} </Button>
        ) : (
          <Button variant="secondary" background="light">
            {t("enrollment.skill.show_responses")}
          </Button>
        )}
      </CollapsibleTrigger>
    </Collapsible>
  );
};
