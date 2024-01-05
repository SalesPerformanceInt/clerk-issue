import React, {
  Children,
  createElement,
  type FC,
  type HTMLAttributes,
  type ReactElement,
} from "react";

import { twMerge } from "tailwind-merge";

import { Icon, IconProps } from "~/components";

type MobileCarouselProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactElement | ReactElement[];
  title: string;
  icon?: IconProps["icon"];
};

const MobileCarousel: FC<MobileCarouselProps> = ({
  children,
  className,
  icon,
  title,
}) => {
  return (
    <section className="flex flex-col items-center gap-4">
      <div className="flex w-full items-center">
        {icon && <Icon icon={icon} className="mr-2 text-primary-50" />}
        <h1 className="text-xxl font-normal">{title}</h1>
      </div>
      <div
        className={twMerge(
          "no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-10",
          "w-full-px-4 px-4",
          "sm:w-full-px-10 sm:px-10",
          "desktop:w-full-px-4 desktop:px-4",
          className,
        )}
      >
        {Children.map(children, (child) =>
          createElement(child.type, {
            ...{
              ...child.props,
              className: twMerge(
                "snap-center flex-grow flex-shrink-0 max-w-sm",
                "basis-11/12 min-w-carousel-card",
                "sm:basis-1/2-gap-4",
                "desktop:basis-1/3-gap-4 desktop:min-w-[auto]",
              ),
            },
          }),
        )}
      </div>
    </section>
  );
};

export { MobileCarousel, type MobileCarouselProps };
