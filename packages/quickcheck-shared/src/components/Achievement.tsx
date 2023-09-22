import { type FC } from "react";

import { CircularProgress, CircularProgressProps } from "~/components/ui";

type AchievementProps = Omit<CircularProgressProps, "className"> & {
  label: string;
};

export const Achievement: FC<AchievementProps> = ({ label, ...props }) => (
  <div className="w-18">
    <CircularProgress className="h-16 w-16" {...props} />
    <p className="mt-2 text-center w-full text-2xs leading-4 font-semibold uppercase">
      {label}
    </p>
  </div>
);
