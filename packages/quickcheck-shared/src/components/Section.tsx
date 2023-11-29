import React, {
  Children,
  createElement,
  type FC,
  type ReactElement,
  type ReactNode,
} from "react";

import { Icon, IconProps } from "./Icon";
import { Tooltip } from "./Tooltip";

export interface DashboardSectionProps {
  children: ReactElement | ReactElement[];
  title: string;
  icon?: IconProps["icon"];
  tooltip?: string[];
}

export const Section: FC<DashboardSectionProps> = ({
  children,
  title,
  icon,
  tooltip,
}) => {
  return (
    <section className="mb-10 flex flex-col gap-4 last:mb-0">
      <div className="flex w-full items-center gap-2">
        {icon && <Icon icon={icon} className="text-primary-50" />}

        <h1 className="text-xxl font-normal">{title}</h1>

        {tooltip && (
          <Tooltip
            texts={tooltip}
            triggerClassName="text-xs translate-y-[1px]"
          />
        )}
      </div>

      <div className="flex w-full flex-wrap gap-4 sm:gap-8">
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
