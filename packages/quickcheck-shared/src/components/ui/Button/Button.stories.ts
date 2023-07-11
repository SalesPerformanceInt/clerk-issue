import { faArrowRight } from "@fortawesome/pro-light-svg-icons";
import type { Meta, StoryObj } from "@storybook/react";

import { Button as ButtonComponent } from "./Button";
import { ButtonDecorator } from "./Button.template";

const meta = {
  component: ButtonComponent,
  title: "ui/Button",
  decorators: [ButtonDecorator],
} satisfies Meta<typeof ButtonComponent>;

type Story = StoryObj<typeof meta>;

export const Button = {
  args: {
    children: "Button Text",
    disabled: false,
  },
  argTypes: {
    rightIcon: {
      name: "right icon",
      control: "select",
      options: ["none", "right-arrow"],
      mapping: {
        none: undefined,
        "right-arrow": faArrowRight,
      },
    },
    background: {
      options: ["dark", "light"],
    },
    variant: {
      options: ["primary", "secondary"],
    },
  },
} satisfies Story;

export default meta;
