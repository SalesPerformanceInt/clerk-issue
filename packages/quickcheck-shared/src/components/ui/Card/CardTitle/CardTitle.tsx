import React, { type FC, type ReactNode } from "react";

import { twMerge } from "tailwind-merge";

type CardTitleProps = {
  customClassNames?: {
    qty?: string;
    title?: string;
  };
  qty: number;
  title: ReactNode;
};

const CardTitle: FC<CardTitleProps> = ({ customClassNames, qty, title }) => {
  return (
    <div className="flex items-center gap-2">
      <span
        className={twMerge(
          "w-6 h-6 flex items-center justify-center rounded-full bg-secondary text-contrast text-xs",
          customClassNames?.qty,
        )}
      >
        {qty}
      </span>

      <h3
        className={twMerge(
          "text-text font-light uppercase",
          customClassNames?.title,
        )}
      >
        {title}
      </h3>
    </div>
  );
};

export { CardTitle, type CardTitleProps };
