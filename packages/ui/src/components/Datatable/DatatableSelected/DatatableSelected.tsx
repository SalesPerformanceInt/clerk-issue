import React from "react";

import { TrashIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

import type { DatatableSelectedProps } from "./DatatableSelected.types";

export const DatatableSelected = ({
  children,
  selectedQty,
}: DatatableSelectedProps) => {
  return (
    <header className="flex items-center justify-between bg-dark-700 py-3 px-12">
      <h4
        className={classNames(
          "flex items-center gap-2 font-semibold text-light-200",
          {
            invisible: selectedQty === 0,
          },
        )}
      >
        <span className="text-lg text-primary-300"> {selectedQty} </span>
        Selected
      </h4>

      <div className="flex items-center gap-12 font-semibold text-light-200">
        {children}

        <button>
          <TrashIcon className="h-6 w-6 text-accent-strong-400" />
        </button>
      </div>
    </header>
  );
};
