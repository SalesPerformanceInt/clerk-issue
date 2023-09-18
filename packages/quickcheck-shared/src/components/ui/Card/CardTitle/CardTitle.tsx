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
        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-secondary text-contrast text-xs">
          {qty}
        </span>
      )}

      <h3 className="text-text font-light uppercase">{title}</h3>
    </div>
  );
};

export { CardTitle, type CardTitleProps };
