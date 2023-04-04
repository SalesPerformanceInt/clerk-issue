import React from "react";

import classNames from "classnames";

import type { SidenavItemProps } from "./SidenavItem.types";

export const SidenavItem = ({
  name,
  id,
  active,
  handleClick,
}: SidenavItemProps) => {
  if (!name) return null;

  const activeClasses = "border-r-primary-500 text-primary-300";

  return (
    <li
      className={classNames(
        "group border-r-2 border-solid border-r-transparent text-light-500 hover:border-r-primary-500 hover:text-primary-300",
        { [activeClasses]: active },
      )}
    >
      <button
        className="flex w-full items-center gap-3 py-1.5 font-semibold text-current before:h-1.5 before:w-1.5 before:rounded-full before:bg-current"
        onClick={() => handleClick?.(id)}
      >
        {name}
      </button>
    </li>
  );
};
