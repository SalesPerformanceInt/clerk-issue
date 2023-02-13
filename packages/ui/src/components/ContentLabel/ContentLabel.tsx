import React from "react";

import classNames from "classnames";

import { ContentLabelProps } from "./ContentLabel.types";

export const ContentLabel = ({ className, label }: ContentLabelProps) => {
  return (
    <label
      className={classNames(
        "rounded-md border-2 border-solid border-primary-300 px-2 text-sm font-semibold text-primary-300",
        className,
      )}
    >
      {label}
    </label>
  );
};
