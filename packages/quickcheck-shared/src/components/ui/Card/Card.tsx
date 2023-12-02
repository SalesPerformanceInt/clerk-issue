import React, { HTMLAttributes, type FC } from "react";

import { twMerge } from "tailwind-merge";

type CardProps = HTMLAttributes<HTMLDivElement>;

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col rounded bg-background shadow-card",
        className,
      )}
    >
      {children}
    </div>
  );
};

export { Card, type CardProps };
