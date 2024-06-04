import React, { type ComponentPropsWithoutRef, type FC } from "react"

import { cn } from "~qcs/utils"

import { Skeleton } from "~qcs/components/ui/Skeleton"

import { Icon, type IconProps } from "./Icon"
import { Tooltip, type TooltipProps } from "./Tooltip"

/**
 * Section Component
 */

export interface DashboardSectionProps extends ComponentPropsWithoutRef<"section"> {
  title?: string
  icon?: IconProps["icon"]
  tooltip?: TooltipProps["texts"]
}

export const Section: FC<DashboardSectionProps> = ({ children, title, icon, tooltip, className }) => {
  return (
    <section className={cn("mb-10 flex flex-col gap-4 last:mb-0", className)}>
      <div className="flex w-full items-center gap-2">
        {icon && <Icon icon={icon} className="text-primary-50" />}

        {title && <h1 className="text-xxl font-normal">{title}</h1>}

        {tooltip && title && <Tooltip texts={tooltip} triggerClassName="text-xs translate-y-[1px]" ariaLabel={title} />}
      </div>

      <div className="flex w-full flex-wrap gap-4 sm:gap-8">{children}</div>
    </section>
  )
}

/**
 * Section Skeleton
 */

type SectionSkeletonProps = {
  title?: boolean
  icon?: boolean
  tooltip?: boolean
} & Omit<ComponentPropsWithoutRef<"section">, "title">

export const SectionSkeleton: FC<SectionSkeletonProps> = ({ children, title, icon, tooltip, className }) => {
  return (
    <section className={cn("mb-10 flex flex-col gap-4 last:mb-0", className)}>
      <div className="flex w-full items-center gap-2">
        {icon && <Skeleton className="h-5 w-5 bg-text-10" />}

        {title && <Skeleton className="h-5 w-60 bg-text-10" />}

        {tooltip && title && <Skeleton className="h-5 w-5 bg-text-10" />}
      </div>

      <div className="flex w-full flex-wrap gap-4 sm:gap-8">{children}</div>
    </section>
  )
}
