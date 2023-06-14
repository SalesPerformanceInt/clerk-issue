import React, { type FC } from "react";

export const ArrowRight: FC<{
  className?: string;
  alt: string;
}> = ({ className, alt }) => (
  <svg
    role="img"
    className={className}
    width="15"
    height="13"
    viewBox="0 0 15 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="svgArrowRight"
  >
    <title id="svgArrowRight">{alt}</title>
    <path
      d="M13.8438 7.34375L8.65625 12.8438C8.5625 12.9688 8.40625 13 8.28125 13C8.15625 13 8.03125 12.9688 7.9375 12.875C7.71875 12.6875 7.71875 12.375 7.90625 12.1875L12.2812 7.5H0.5C0.21875 7.5 0 7.28125 0 7.03125C0 6.78125 0.21875 6.5 0.5 6.5H12.2812L7.90625 1.84375C7.71875 1.65625 7.71875 1.34375 7.9375 1.15625C8.15625 0.96875 8.46875 0.96875 8.65625 1.1875L13.8438 6.6875C14.0312 6.875 14.0312 7.15625 13.8438 7.34375Z"
      fill="white"
    />
  </svg>
);
