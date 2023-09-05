import React, {
  Children,
  createElement,
  type FC,
  type HTMLAttributes,
  type ReactElement,
} from "react";

import { twMerge } from "tailwind-merge";
import { ResponsiveContainer } from "~/index";

type MobileCarouselProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactElement | ReactElement[];
};

const MobileCarousel: FC<MobileCarouselProps> = ({ children, className }) => {
  return (
    <ResponsiveContainer>
      <section
        className={twMerge(
          "flex gap-4 overflow-x-auto py-6 px-4 no-scrollbar",
          className,
        )}
      >
        {Children.map(children, (child) =>
          createElement(child.type, {
            ...{
              ...child.props,
              className: "flex-grow flex-shrink-0 basis-full max-w-[288px]",
            },
          }),
        )}
      </section>
    </ResponsiveContainer>
  );
};

export { MobileCarousel, type MobileCarouselProps };
