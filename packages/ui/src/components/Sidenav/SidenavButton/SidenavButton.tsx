import React from "react";

import { PlusIcon } from "@radix-ui/react-icons";

import type { SidenavButtonProps } from "./SidenavButton.types";

export const SidenavButton = ({ title }: SidenavButtonProps) => {
  if (!title) return null;

  return (
    <button className="flex items-center gap-2">
      <PlusIcon className="h-5 w-5 text-dark-200" />

      <h3 className="text-base font-semibold text-dark-200">{title}</h3>
    </button>
  );
};
