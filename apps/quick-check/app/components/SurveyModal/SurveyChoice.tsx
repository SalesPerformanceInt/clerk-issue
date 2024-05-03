import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useControlField, useField } from "remix-validated-form";

export const sentiments = ["good", "neutral", "bad"] as const;

export type Sentiment = (typeof sentiments)[number];

interface SurveyChoiceProps {
  sentiment: Sentiment;
  icon: IconProp;
  label: string;
}

export const SurveyChoice: FC<SurveyChoiceProps> = ({
  sentiment,
  label,
  icon,
}) => {
  const { getInputProps } = useField("sentiment", {
    validationBehavior: {
      initial: "onChange",
      whenTouched: "onChange",
    },
  });

  const [, setValue] = useControlField("sentiment");

  const choiceId = `sentiment_${sentiment}`;

  return (
    <div className="flex-grow sm:flex-1">
      <input
        {...getInputProps({
          type: "radio",
          id: choiceId,
          value: sentiment,
          onChange: (e) => setValue(e.target.value),
        })}
        className={`peer hidden`}
      />
      <label
        htmlFor={choiceId}
        className={`focus-visible:ring-ring flex flex-grow flex-col items-center rounded-sm border-text-10 bg-background p-2 text-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 peer-checked:bg-background-secondary`}
      >
        <div className="h-6">
          <FontAwesomeIcon icon={icon} className="text-base text-primary" />
        </div>
        <div className="text-balance   text-base leading-6 text-primary ">
          {label}
        </div>
      </label>
    </div>
  );
};
