import React from "react"

import type { Decorator } from "@storybook/react"

import type { MobileCarouselProps } from "./MobileCarousel"

export const MobileCarouselDecorator: Decorator<MobileCarouselProps> = (Story, { args }) => {
  return (
    <Story
      args={{
        ...args,
      }}
    />
  )
}
