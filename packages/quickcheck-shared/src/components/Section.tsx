import React, { type ComponentPropsWithoutRef, type FC } from "react";

import { cn } from "~qcs/utils";

import { Icon, type IconProps } from "./Icon";
import { Tooltip } from "./Tooltip";

export interface DashboardSectionProps
  extends ComponentPropsWithoutRef<"section"> {
  title?: string;
  icon?: IconProps["icon"];
  tooltip?: string[];
}

export const Section: FC<DashboardSectionProps> = ({
  children,
  title,
  icon,
  tooltip,
  className,
}) => {
  return (
    <section className={cn("mb-10 flex flex-col gap-4 last:mb-0", className)}>
      <div className="flex w-full items-center gap-2">
        {icon && <Icon icon={icon} className="text-primary-50" />}

        {title && <h1 className="text-xxl font-normal">{title}</h1>}

        {tooltip && title && (
          <Tooltip
            texts={tooltip}
            triggerClassName="text-xs translate-y-[1px]"
            ariaLabel={title}
          />
        )}
      </div>

      <div className="flex w-full flex-wrap gap-4 sm:gap-8">{children}</div>
    </section>
  );
};
