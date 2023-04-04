import React, { Children, createElement } from "react";

import type { SidebarItemProps } from "./SidebarItem.types";

export const SidebarItem = ({ children }: SidebarItemProps) => {
  return (
    <div className="group flex w-full cursor-pointer items-center justify-center border-r-2 border-solid border-r-transparent py-4 px-6 hover:border-r-primary-500 hover:bg-dark-700">
      {Children.map(children, (child) =>
        createElement(child.type, {
          ...{
            ...child.props,
            className: "h-8 w-8 text-light-500 group-hover:text-primary-500",
          },
        }),
      )}
    </div>
  );
};
