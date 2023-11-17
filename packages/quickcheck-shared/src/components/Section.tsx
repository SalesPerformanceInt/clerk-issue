import React, {
  Children,
  createElement,
  type FC,
  type ReactElement,
  type ReactNode,
} from "react";

import { Icon, IconProps } from "./Icon";

export interface DashboardSectionProps {
  children: ReactElement | ReactElement[];
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
        <h1 className="text-xxl font-normal">{title}</h1>
      </div>
      <div className="w-full gap-4 sm:gap-8 flex flex-wrap">
        {Children.map(children, (child) =>
          createElement(child.type, {
            ...{
              ...child.props,
              className: "flex-grow basis-full flow sm:basis-5/12 h-fit",
            },
          }),
        )}
      </div>
    </section>
  );
};
