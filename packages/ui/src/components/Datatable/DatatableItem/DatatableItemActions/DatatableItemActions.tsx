import React from "react";

import { CopyIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

import { DatatableItemCell } from "../DatatableItemCell";

export const DatatableItemActions = () => {
  return (
    <DatatableItemCell title="" className="flex flex-[0.75] justify-end gap-4">
      <button>
        <Pencil1Icon className="h-6 w-6 text-dark-200" />
      </button>

      <button>
        <CopyIcon className="h-6 w-6 text-dark-200" />
      </button>

      <button>
        <TrashIcon className="h-6 w-6 text-accent-strong-400" />
      </button>
    </DatatableItemCell>
  );
};
