import React, { type FC, type ReactNode } from "react";

import { isNil } from "remeda";
import { twMerge } from "tailwind-merge";

type CardTitleProps = {
  qty?: number;
  title: ReactNode;
  className?: string;
};

const CardTitle: FC<CardTitleProps> = ({ qty, title, className }) => {
  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      {!isNil(qty) && (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs text-contrast">
          {qty}
        </span>
      )}

      <h2 className="font-light uppercase text-text">{title}</h2>
    </div>
  );
};

export { CardTitle, type CardTitleProps };
