import React, { type FC } from "react";
import { useTranslation } from "react-i18next";

import { CircularProgress, type CircularProgressProps } from "~/components/ui";

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
  const { t } = useTranslation();

  return (
    <div className="max-w-18">
      <CircularProgress className="h-16 w-16" {...props} />

      <div className="mt-2 text-center text-2xs font-semibold uppercase leading-4">
        {label}

        {tooltip && (
          <Tooltip
            texts={tooltip}
            ariaLabel={t("common.achievement.aria_label")}
          />
        )}
      </div>
    </div>
  );
};
