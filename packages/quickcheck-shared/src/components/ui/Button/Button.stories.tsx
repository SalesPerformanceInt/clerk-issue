import React from "react"

import { faArrowRight } from "@fortawesome/pro-light-svg-icons"
import type { Meta, StoryObj } from "@storybook/react"
import { ProgressIcon } from "~qcs/images"

import { Button as ButtonComponent } from "./Button"
import { ButtonDecorator } from "./Button.template"

const meta = {
  component: ButtonComponent,
  title: "ui/Button",
  decorators: [ButtonDecorator],
} satisfies Meta<typeof ButtonComponent>

type Story = StoryObj<typeof meta>

export const Button = {
  args: {
    children: "Button Text",
    disabled: false,
  },
  argTypes: {
    rightIcon: {
      name: "right icon",
      control: "select",
      options: ["none", "right-arrow", "progress"],
      mapping: {
        none: undefined,
        "right-arrow": faArrowRight,
        progress: <ProgressIcon className="[&>*]:fill-background" />,
      },
    },
    background: {
      options: ["dark", "light"],
    },
    variant: {
      options: ["primary", "secondary"],
    },
  },
} satisfies Story

export default meta
