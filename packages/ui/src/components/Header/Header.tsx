import React from "react";

import { Breadcrumbs } from "~/components/Breadcrumbs";
import { ContentLabel } from "~/components/ContentLabel";

import type { HeaderProps } from "./Header.types";

export const Header = ({ title, breadcrumbs, contentLabel }: HeaderProps) => {
  return (
    <header className="flex h-fit w-full items-center justify-between bg-dark-400 py-4 px-8">
      <div className="flex flex-col items-start justify-between gap-1">
        <Breadcrumbs items={breadcrumbs} />

        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold text-light-200"> {title} </h1>

          {contentLabel && (
            <ContentLabel label={contentLabel} className="translate-y-[2px]" />
          )}
        </div>
      </div>
    </header>
  );
};
