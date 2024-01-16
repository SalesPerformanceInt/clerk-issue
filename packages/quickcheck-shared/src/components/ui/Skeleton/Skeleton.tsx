import React, { type FC, type HTMLAttributes } from "react";

import { cn } from "~/utils";

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
        "bg-background-skeleton animate-pulse rounded-md",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
