import React from "react";

import { unstable_createRemixStub } from "@remix-run/testing";

import { useArgs } from "@storybook/client-api";
import type { Decorator } from "@storybook/react";

import type { HeaderProps } from "./Header.types";

export const HeaderDecorator: Decorator<HeaderProps> = (Story) => {
  const [args] = useArgs();

  const RemixStub = unstable_createRemixStub([
    {
      path: "/",
      element: <Story />,
      loader: () => {
        return args;
      },
    },
  ]);

  return <RemixStub />;
};
