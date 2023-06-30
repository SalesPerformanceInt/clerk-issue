import React from "react";

import { twMerge } from "tailwind-merge";

import { cleanHTML } from "~/utils/cleanHtml";

import {
  buttonBehaviorStyles,
  buttonStyles,
  selectedStyles,
} from "./Choice.styles";
import type { ChoiceProps } from "./Choice.types";

export const Choice = ({
  onClick,
  selected,
  disabled,
  choice,
}: ChoiceProps) => {
  if (!choice) return null;
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        buttonStyles,
        buttonBehaviorStyles,
        selected && selectedStyles,
      )}
      dangerouslySetInnerHTML={{ __html: cleanHTML(choice.body ?? "") }}
      {...choice.$?.body}
    />
  );
};
