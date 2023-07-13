import React from "react";

import type { Decorator } from "@storybook/react";

import type { ProgressCardProps } from "./ProgressCard";

export const ProgressCardDecorator: Decorator<ProgressCardProps> = (
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
