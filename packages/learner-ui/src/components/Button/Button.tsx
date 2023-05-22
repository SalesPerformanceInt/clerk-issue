import React, { FC } from "react";

import { twMerge } from "tailwind-merge";

import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({ className = "", ...props }) => (
  <button
    className={twMerge(
      `h-12 w-full max-w-[150px] rounded  bg-sky-200 px-2 py-2 text-xs hover:bg-sky-300 ${className}`,
    )}
    {...props}
  />
);
