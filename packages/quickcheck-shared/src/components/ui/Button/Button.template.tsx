import React from "react"

import type { Decorator } from "@storybook/react"

import type { ButtonProps } from "./Button"

export const ButtonDecorator: Decorator<ButtonProps> = (Story, { args }) => {
  return (
    <Story
      args={{
        ...args,
      }}
    />
  )
}
