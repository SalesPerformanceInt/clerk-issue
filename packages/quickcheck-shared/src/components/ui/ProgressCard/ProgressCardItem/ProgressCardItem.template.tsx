import React from "react";

import type { Decorator } from "@storybook/react";

import type { ProgressCardItemProps } from "./ProgressCardItem";

export const ProgressCardItemDecorator: Decorator<ProgressCardItemProps> = (
  Story,
  { args },
) => {
  return (
    <Story
      args={{
        ...args,
      }}
    />
  );
};
