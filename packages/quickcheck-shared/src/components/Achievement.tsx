import { type FC } from "react";

import { CircularProgress, CircularProgressProps } from "~/components/ui";

import { Tooltip } from "./Tooltip";

type AchievementProps = Omit<CircularProgressProps, "className"> & {
  label: string;
  tooltip?: string[];
};

export const Achievement: FC<AchievementProps> = ({
  label,
  tooltip,
  ...props
}) => {
  return (
    <div className="w-18">
      <CircularProgress className="h-16 w-16" {...props} />

      <div className="mt-2 w-full text-center text-2xs font-semibold uppercase leading-4">
        {label}

        {tooltip && <Tooltip texts={tooltip} />}
      </div>
    </div>
  );
};
