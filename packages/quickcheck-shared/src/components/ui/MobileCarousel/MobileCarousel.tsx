import React, { type FC, type HTMLAttributes, type ReactNode } from "react"

import { cn } from "~qcs/utils"

import { Icon, IconProps } from "~qcs/components"

type MobileCarouselProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode | ReactNode[]
  title: string
  icon?: IconProps["icon"]
}

const MobileCarousel: FC<MobileCarouselProps> = ({ children, className, icon, title }) => {
  return (
    <section className="flex flex-col items-center gap-4">
      <div className="flex w-full items-center">
        {icon && <Icon icon={icon} className="mr-2 text-primary-50" />}
        <h1 className="text-xxl font-normal">{title}</h1>
      </div>
      <div
        className={cn(
          "no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-10",
          "w-full-px-4 px-4",
          "sm:w-full-px-10 sm:px-10",
          "desktop:w-full-px-4 desktop:px-4",
          className,
        )}
      >
        {children}
      </div>
    </section>
  )
}

export { MobileCarousel, type MobileCarouselProps }
