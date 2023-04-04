import React from "react";

import { SidebarProps } from "./Sidebar.types";

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="flex h-full w-fit flex-col items-center justify-between border-r border-dark-700 bg-dark-500 py-6">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-3xl font-thin tracking-wide text-accent-strong-400">
          CMS
        </h1>

        <div className="flex w-full flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};
