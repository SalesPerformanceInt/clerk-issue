import React, { FC } from "react";

export const RedCircleX: FC<{
  className?: string;
  alt: string;
}> = ({ className, alt }) => (
  <svg
    className={className}
    role="img"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="svgRedCircleX"
  >
    <title id="svgRedCircleX">{alt}</title>
    <path
      d="M14 8L8 14M8 8L14 14M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
      stroke="#AF3A14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
