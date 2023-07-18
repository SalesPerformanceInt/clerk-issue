import React, { type FC, type ReactNode } from "react";

import { Icon, IconProps } from "./Icon";

export interface DashboardSectionProps {
  children: ReactNode;
  title: string;
  icon?: IconProps["icon"];
}

export const Section: FC<DashboardSectionProps> = ({
  children,
  title,
  icon,
}) => {
  return (
    <section className="flex flex-col gap-4 mb-10 last:mb-0">
      <div className="flex items-center w-full">
        {icon && <Icon icon={icon} className="mr-2 text-primary-50" />}
        <h1 className="text-xxl font-light">{title}</h1>
      </div>
      <div className="w-full gap-4 sm:gap-8 grid grid-cols-1 sm:grid-cols-2">
        {children}
      </div>
    </section>
  );
};
