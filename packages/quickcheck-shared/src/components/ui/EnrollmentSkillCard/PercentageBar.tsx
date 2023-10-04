import { type FC } from "react";

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
}

export const PercentageBar: FC<PercentageBarProps> = ({ percent, empty }) => {
  if (empty)
    return (
      <div className="h-6 rounded-full flex justify-end px-2 items-center w-full bg-gradient-to-r from-background-secondary from-50%" />
    );

  return (
    <Progress className="h-6 rounded-full overflow-hidden" value={percent}>
      <ProgressIndicator
        className={twMerge(
          "w-full h-full rounded-full justify-end flex items-center px-2 min-w-8",
          getClassName(percent),
        )}
        style={{ width: `${percent}%` }}
      >
        <p className="uppercase font-semibold text-xs leading-4">{`${percent}%`}</p>
      </ProgressIndicator>
    </Progress>
  );
};
