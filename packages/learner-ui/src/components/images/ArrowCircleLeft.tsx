import React, { FC } from "react";

export const ArrowCircleLeft: FC<{
  className?: string;
  alt: string;
}> = ({ className, alt }) => (
  <svg
    role="img"
    className={className}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="svgArrowCircleLeft"
  >
    <title id="svgArrowCircleLeft">{alt}</title>
    <path
      d="M11 7L7 11M7 11L11 15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
      stroke="#444444"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
