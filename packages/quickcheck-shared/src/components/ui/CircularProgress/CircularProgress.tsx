import { type FC } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

import { twMerge } from "tailwind-merge";

export type CircularProgressProps = {
  className?: string;
  text: string;
  percentage: number;
  pathClassName?: string;
};

export const CircularProgress: FC<CircularProgressProps> = ({
  className,
  pathClassName,
  text,
  percentage,
}) => {
  return (
    <CircularProgressbarWithChildren
      value={percentage}
      strokeWidth={10}
      classes={{
        root: twMerge("CircularProgress w-full align-middle", className),
        path: twMerge("CircularProgress-path stroke-primary-75", pathClassName),
        trail: "CircularProgress-trail stroke-background-secondary",
        text: "CircularProgress-text",
        background: "CircularProgress-background fill-background-secondary",
      }}
    >
      <p className="fill-primary-25 text-xxl font-semibold text-text">{text}</p>
    </CircularProgressbarWithChildren>
  );
};
