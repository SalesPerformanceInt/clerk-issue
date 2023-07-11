import React, { type FC, type ReactNode } from "react";

type CardTitleProps = {
  qty: number;
  title: ReactNode;
};

const CardTitle: FC<CardTitleProps> = ({ qty, title }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-secondary text-contrast text-xs">
        {qty}
      </span>

      <h3 className="text-text font-light uppercase">{title}</h3>
    </div>
  );
};

export { CardTitle, type CardTitleProps };
