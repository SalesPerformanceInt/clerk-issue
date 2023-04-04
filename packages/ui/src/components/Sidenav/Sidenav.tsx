import React from "react";

import type { SidenavProps } from "./Sidenav.types";

export const Sidenav = ({ children }: SidenavProps) => {
  return (
    <section className="flex w-full flex-col gap-12 py-8">{children}</section>
  );
};
