import React, { FC, ReactNode } from "react";

import { ResponsiveContainer } from "~/components";

interface HeaderProps {
  left?: ReactNode;
  right?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ left, right }) => {
  return (
    <ResponsiveContainer className="bg-primary sticky top-0 z-10">
      <div className="p-4 sm:px-0 sm:py-6 flex items-center h-6 box-content">
        {left}
        <div className="flex-grow" />
        {right}
      </div>
    </ResponsiveContainer>
  );
};
