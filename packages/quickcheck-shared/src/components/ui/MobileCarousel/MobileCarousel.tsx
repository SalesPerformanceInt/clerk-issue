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
    <section className="flex flex-col gap-4">
      <div className="flex w-full items-center">
        {icon && <Icon icon={icon} className="mr-2 text-primary-50" />}
        <h1 className="text-xxl font-normal">{title}</h1>
      </div>
      <div
        className={twMerge(
          "no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-10",
          className,
        )}
      >
        {Children.map(children, (child) =>
          createElement(child.type, {
            ...{
              ...child.props,
              className:
                "flex-grow flex-shrink-0 basis-11/12 desktop:basis-0 snap-center min-w-carousel-card",
            },
          }),
        )}
      </div>
    </section>
  );
};

export { MobileCarousel, type MobileCarouselProps };
