import React from "react";

import classNames from "classnames";

import {
  buttonStyles,
  selectedStyles,
  unselectedStyles,
} from "./Choice.styles";
import type { ChoiceProps } from "./Choice.types";

export const Choice = ({ onClick, selected, disabled }: ChoiceProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        "w-full rounded-lg border  px-3 py-2 text-left text-sm transition duration-150 ease-in-out",
        {
          [selectedStyles]: selected,
          [unselectedStyles]: !selected,
          [buttonStyles]: !disabled,
        },
      )}
    />
  );
};
