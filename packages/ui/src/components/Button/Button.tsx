import React from "react";

import type { ButtonProps } from "./Button.types";

const ButtonOutline = ({ title, ...buttonProps }: ButtonProps) => {
  if (!title) return null;

  return (
    <button
      className="rounded-md border-2 border-solid border-primary-300 px-4 py-1.5 font-semibold text-primary-300"
      {...buttonProps}
    >
      {title}
    </button>
  );
};

export const Button = Object.assign({}, { Outline: ButtonOutline });
