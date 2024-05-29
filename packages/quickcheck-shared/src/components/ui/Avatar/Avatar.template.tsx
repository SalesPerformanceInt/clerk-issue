import React from "react"

import type { Decorator } from "@storybook/react"

import type { AvatarProps } from "./Avatar"

export const AvatarDecorator: Decorator<AvatarProps> = (Story, { args }) => {
  return (
    <Story
      args={{
        ...args,
      }}
    />
  )
}
