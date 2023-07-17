import type { Meta, StoryObj } from "@storybook/react";

import { Avatar as AvatarComponent } from "./";
import { AvatarDecorator } from "./Avatar.template";

const meta = {
  component: AvatarComponent,
  title: "ui/Avatar",
  decorators: [AvatarDecorator],
} satisfies Meta<typeof AvatarComponent>;

type Story = StoryObj<typeof meta>;

export const Avatar = {
  args: {
    initials: "AZ",
  },
  argTypes: {
    className: { table: { disable: true } },
    asChild: { table: { disable: true } },
    initials: {
      defaultValue: "AZ",
    },
    src: {
      name: "Image",
      control: "select",
      options: ["none", "Ari"],
      mapping: {
        none: undefined,
        Ari: "https://media.licdn.com/dms/image/D5603AQHJkD_fdwtexQ/profile-displayphoto-shrink_200_200/0/1670522896581?e=1694649600&v=beta&t=CxZKc7qlVZfw4JiVckGbqmXu7Ak5k_LywWm4KOviQ_Y",
      },
    },
  },
} satisfies Story;

export default meta;
