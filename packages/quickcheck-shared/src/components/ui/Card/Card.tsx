import React, { HTMLAttributes, type FC } from "react";

import { twMerge } from "tailwind-merge";

type CardProps = HTMLAttributes<HTMLDivElement>;

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={twMerge("shadow-card rounded w-fit flex", className)}>
      {children}
    </div>
  );
};

export { Card, type CardProps };
