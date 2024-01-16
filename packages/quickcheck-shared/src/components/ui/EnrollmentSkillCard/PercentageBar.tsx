import React, { type FC } from "react";

import { Progress, ProgressIndicator } from "@radix-ui/react-progress";
import { twMerge } from "tailwind-merge";

const getClassName = (percentage: number) => {
  if (percentage > 75) return "bg-chart-green";
  if (percentage > 50) return "bg-chart-yellow";
  if (percentage > 25) return "bg-chart-orange";
  if (percentage > 0) return "bg-chart-red text-background";
  return "bg-transparent text-chart-red";
};

export interface PercentageBarProps {
  percent: number;
  empty?: boolean;
  ariaLabel: string;
}

export const PercentageBar: FC<PercentageBarProps> = ({
  percent,
  empty,
  ariaLabel,
}) => {
  if (empty)
    return (
      <div className="flex h-6 w-full items-center justify-end rounded-full bg-gradient-to-r from-background-secondary from-50% px-2" />
    );

  return (
    <Progress
      className="h-6 overflow-hidden rounded-full"
      value={percent}
      aria-label={ariaLabel}
    >
      <ProgressIndicator
        className={twMerge(
          "flex h-full w-full min-w-8 items-center justify-end rounded-full px-2",
          getClassName(percent),
        )}
        style={{ width: `${percent}%` }}
      >
        <p className="text-xs font-semibold uppercase leading-4">{`${percent}%`}</p>
      </ProgressIndicator>
    </Progress>
  );
};
