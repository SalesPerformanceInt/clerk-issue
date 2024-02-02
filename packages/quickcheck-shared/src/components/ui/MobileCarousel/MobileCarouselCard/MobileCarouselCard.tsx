import React, { type FC, type ReactNode } from "react";

import {
  Card,
  CardTitleSkeleton,
  type CardProps,
  type CardTitleSkeletonProps,
} from "~qcs/components/ui/Card";
import { cn } from "~qcs/utils";

/**
 * Mobile Carousel Card Component
 */

export type MobileCarouselCardProps = CardProps;

export const MobileCarouselCard: FC<MobileCarouselCardProps> = ({
  children,
  className,
}) => {
  return (
    <Card
      className={cn(
        "max-w-sm flex-shrink-0 flex-grow snap-center",
        "min-w-carousel-card basis-11/12",
        "sm:basis-1/2-gap-4",
        "desktop:min-w-[auto] desktop:basis-1/3-gap-4",
        className,
      )}
    >
      {children}
    </Card>
  );
};

/**
 * Mobile Carousel Card Skeleton Component
 */

export type MobileCarouselCardSkeletonProps = CardTitleSkeletonProps & {
  children?: ReactNode;
};

export const MobileCarouselCardSkeleton: FC<
  MobileCarouselCardSkeletonProps
> = ({ className, qty, title, children }) => {
  return (
    <MobileCarouselCard className={className}>
      <CardTitleSkeleton qty={qty} title={title} />

      {children}
    </MobileCarouselCard>
  );
};
