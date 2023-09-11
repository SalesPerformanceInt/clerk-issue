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
      <div className="flex items-center w-full">
        {icon && <Icon icon={icon} className="mr-2 text-primary-50" />}
        <h1 className="text-xxl font-light">{title}</h1>
      </div>
      <div
        className={twMerge(
          "flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-10 -mx-4 px-4",
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
