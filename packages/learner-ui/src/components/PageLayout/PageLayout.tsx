import React, { FC } from "react";

import { Container } from "~/components";

import { PageLayoutProps } from "./PageLayout.types";

export const PageLayout: FC<PageLayoutProps> = ({ children }) => (
  <div className="bg-primary-dark flex min-h-screen w-full justify-center">
    <Container className="relative flex flex-col">{children}</Container>
  </div>
);
