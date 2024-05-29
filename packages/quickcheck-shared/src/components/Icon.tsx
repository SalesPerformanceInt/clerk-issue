import React, { type FC, type ReactNode } from "react"

import type { IconDefinition } from "@fortawesome/pro-light-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { twMerge } from "tailwind-merge"

export type IconProps = {
  icon: IconDefinition | ReactNode
  className?: string
}

const isIconDefinition = (value: unknown): value is IconDefinition =>
  typeof value === "object" && !!value && "icon" in value

export const Icon: FC<IconProps> = ({ icon, className }) => {
  if (isIconDefinition(icon)) {
    return <FontAwesomeIcon icon={icon} className={twMerge("text-center text-base leading-6", className)} />
  }

  return <div className={className}>{icon}</div>
}
