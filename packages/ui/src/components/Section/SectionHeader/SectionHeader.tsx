import React from "react";

import { Button } from "../../Button";
import { SectionHeaderProps } from "./SectionHeader.types";

export const SectionHeader = ({
  title,
  titleQty,
  buttonTitle,
}: SectionHeaderProps) => {
  if (!title) return null;

  return (
    <header className="flex w-full items-center justify-between px-12 pb-8">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold tracking-wider text-light-200">
          {title}
        </h1>

        {titleQty && (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-300 text-lg font-semibold text-dark-600">
            {titleQty}
          </div>
        )}
      </div>

      <Button.Outline title={buttonTitle} />
    </header>
  );
};
