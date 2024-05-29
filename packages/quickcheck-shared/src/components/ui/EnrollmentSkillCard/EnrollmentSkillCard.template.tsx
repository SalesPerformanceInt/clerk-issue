import React from "react"

import type { Decorator } from "@storybook/react"

import type { EnrollmentSkillData } from "./types"

export const EnrollmentSkillCardDecorator: Decorator<EnrollmentSkillData> = (Story, { args }) => {
  return (
    <Story
      args={{
        ...args,
      }}
    />
  )
}
