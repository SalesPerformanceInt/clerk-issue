import React from "react";

import type { Decorator } from "@storybook/react";

import type { ProgressItemProps } from "./ProgressItem";

export const ProgressItemDecorator: Decorator<ProgressItemProps> = (
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
