import React, { type FC, type ReactNode } from "react"
import { useTranslation } from "react-i18next"

import { isNil } from "remeda"
import { twMerge } from "tailwind-merge"

import { cn } from "~qcs/utils"

import { Tooltip, type TooltipProps } from "~qcs/components/Tooltip"
import { Skeleton } from "~qcs/components/ui/Skeleton"

/**
 * Card Title Component
 */

export type CardTitleProps = {
  qty?: number
  title: ReactNode
  className?: string
  tooltip?: TooltipProps["texts"]
}

export const CardTitle: FC<CardTitleProps> = ({ qty, title, tooltip, className }) => {
  const { t } = useTranslation()

  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      {!isNil(qty) && (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs text-contrast">
          {qty}
        </span>
      )}

      <h2 className="font-light uppercase text-text">{title}</h2>

      {tooltip && <Tooltip texts={tooltip} ariaLabel={t("common.leaderboard")} contentClassName="sm:max-w-[484px]" />}
    </div>
  )
}

/**
 * Card Title Skeleton Component
 */

export type CardTitleSkeletonProps = {
  qty?: boolean
  title?: boolean
  className?: string
}

export const CardTitleSkeleton: FC<CardTitleSkeletonProps> = ({ qty, title, className }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {qty && <Skeleton className="h-6 w-6 rounded-full" />}

      {title && <Skeleton className="h-5 w-3/4" />}
    </div>
  )
}
