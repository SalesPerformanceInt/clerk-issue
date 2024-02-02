import React, { type FC, type ReactNode } from "react";

import { ResponsiveContainer } from "~qcs/components";

interface HeaderProps {
  left?: ReactNode;
  right?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ left, right }) => {
  return (
    <ResponsiveContainer
      className="sticky top-0 z-10 overflow-x-hidden bg-primary"
      asChild
    >
      <header>
        <div className="box-content flex h-6 items-center p-4 sm:px-0 sm:py-6">
          {left}
          <div className="flex-grow" />
          {right}
        </div>
      </header>
    </ResponsiveContainer>
  );
};
