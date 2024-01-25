import React, { type FC, type HTMLAttributes, type ReactNode } from "react";

import { cn } from "~qcs/utils";

import { CardTitleSkeleton, type CardTitleSkeletonProps } from "./CardTitle";

/**
 * Card Component
 */

export type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col rounded bg-background shadow-card",
        className,
      )}
    >
      {children}
    </div>
  );
};

/**
 * Card Skeleton Component
 */

export type CardSkeletonProps = CardTitleSkeletonProps & {
  children?: ReactNode;
};

export const CardSkeleton: FC<CardSkeletonProps> = ({
  className,
  qty,
  title,
  children,
}) => {
  return (
    <Card className={className}>
      <CardTitleSkeleton qty={qty} title={title} />

      {children}
    </Card>
  );
};
