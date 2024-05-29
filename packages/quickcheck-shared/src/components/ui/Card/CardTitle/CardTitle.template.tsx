import React from "react"

import type { Decorator } from "@storybook/react"

import type { CardTitleProps } from "./CardTitle"

export const CardTitleDecorator: Decorator<CardTitleProps> = (Story, { args }) => {
  return (
    <Story
      args={{
        ...args,
      }}
    />
  )
}
