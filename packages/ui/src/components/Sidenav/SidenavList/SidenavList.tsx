import React from "react";

import { SidenavButton } from "../SidenavButton";
import { SidenavItem } from "../SidenavItem";
import type { SidenavListProps } from "./SidenavList.types";

export const SidenavList = ({
  buttonTitle,
  listTitle,
  items,
  currentItemId,
  handleClick,
}: SidenavListProps) => {
  if (!items || !listTitle) return null;

  return (
    <div className="flex flex-col gap-6 pl-6">
      <SidenavButton title={buttonTitle} />

      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-bold tracking-wide text-light-500">
          {listTitle}
        </h3>

        <ul>
          {items.map((item) => (
            <SidenavItem
              key={item.id}
              id={item.id}
              name={item.name}
              active={item.id === currentItemId}
              handleClick={handleClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
