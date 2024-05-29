import React, { type ComponentPropsWithoutRef, type FC } from "react"

import { cn } from "~qcs/utils"

/**
 * PageTitle Props
 */

export type PageTitleProps = ComponentPropsWithoutRef<"div"> & {
  breadcrumbs: string[]
  title: string
}

/**
 * PageTitle Component
 */

export const PageTitle: FC<PageTitleProps> = ({ breadcrumbs, title, className, ...props }) => {
  return (
    <div className={cn(className)} {...props}>
      <p className="hidden text-xs font-semibold uppercase leading-4 sm:inline-block">{breadcrumbs.join(" / ")}</p>

      <h2 className="text-xxl font-semibold leading-8 text-text">{title}</h2>
    </div>
  )
}
