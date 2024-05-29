import React from "react"

import type { Decorator } from "@storybook/react"

import type { CardProps } from "./Card"

export const CardDecorator: Decorator<CardProps> = (Story, { args }) => {
  return (
    <Story
      args={{
        ...args,
      }}
    />
  )
}
