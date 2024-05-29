import React, { forwardRef, type ReactNode } from "react"

import { Slot } from "@radix-ui/react-slot"
import { twMerge } from "tailwind-merge"

interface ResponsiveContainerProps {
  className?: string
  asChild?: boolean
  children: ReactNode
}

export const ResponsiveContainer = forwardRef<HTMLDivElement, ResponsiveContainerProps>(
  ({ className, asChild, children }, ref) => {
    const Component = asChild ? Slot : "div"

    return (
      <div ref={ref} className={twMerge("flex w-full justify-center", className)}>
        <Component className="w-full max-w-desktop px-0 sm:px-6 lg:px-0">{children}</Component>
      </div>
    )
  },
)

ResponsiveContainer.displayName = "ResponsiveContainer"
