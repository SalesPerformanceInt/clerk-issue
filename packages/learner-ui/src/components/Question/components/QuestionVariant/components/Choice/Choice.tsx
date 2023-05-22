import React from "react";

import classNames from "classnames";

import { cleanHTML } from "~/utils/cleanHtml";

import {
  buttonBehaviorStyles,
  buttonStyles,
  selectedStyles,
  unselectedStyles,
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
      className={classNames(buttonStyles, buttonBehaviorStyles, {
        [selectedStyles]: selected,
        [unselectedStyles]: !selected,
      })}
      dangerouslySetInnerHTML={{ __html: cleanHTML(choice.body ?? "") }}
      {...choice.$?.body}
    />
  );
};