import { type FC, type PropsWithChildren } from "react"
import { useMedia } from "react-use"

import { useLandingContext } from "../LandingContext"

export const LandingBody: FC<PropsWithChildren> = ({ children }) => {
  const { headerHeight, footerHeight } = useLandingContext()

  const isLg = useMedia("(min-width: 1024px)", true)

  return (
    <div
      style={isLg ? { height: `calc(100% - ${headerHeight + footerHeight}px)` } : {}}
      className="flex flex-col gap-6 bg-background-secondary p-6 pb-0 lg:flex-row lg:gap-8 lg:p-18 lg:pb-0"
    >
      {children}
    </div>
  )
}
