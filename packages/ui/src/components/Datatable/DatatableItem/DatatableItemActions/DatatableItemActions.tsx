import React from "react";

import { CopyIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

import { DatatableItemCell } from "../DatatableItemCell";
import type { DatatableItemActionsProps } from "./DatatableItemActions.types";

export const DatatableItemActions = ({
  className,
}: DatatableItemActionsProps) => {
  return (
    <DatatableItemCell
      title=""
      className={classNames("flex justify-end gap-4", className)}
    >
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
