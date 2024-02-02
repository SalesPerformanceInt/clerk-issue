import React, { type FC, type HTMLAttributes } from "react";

import { cn } from "~qcs/utils";

/**
 * Skeleton Props
 */

export type SkeletonProps = HTMLAttributes<HTMLDivElement>;

/**
 * Skeleton Component
 */

export const Skeleton: FC<SkeletonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-background-skeleton",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
