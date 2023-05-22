import React, { FC } from "react";

import { Container } from "~/components";

import { PageLayoutProps } from "./PageLayout.types";

export const PageLayout: FC<PageLayoutProps> = ({ children }) => (
  <div className="flex min-h-screen w-full justify-center bg-indigo-950">
    <Container className="relative flex flex-col">{children}</Container>
  </div>
);
