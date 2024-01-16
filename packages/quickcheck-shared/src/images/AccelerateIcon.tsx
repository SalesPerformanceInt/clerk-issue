import React, { type FC } from "react";

interface AccelerateIconProps {
  className?: string;
  dark?: boolean;
}

export const AccelerateIcon: FC<AccelerateIconProps> = ({
  className,
  dark,
}) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 12C-2.07487e-07 14.3734 0.703787 16.6935 2.02236 18.6668C3.34094 20.6402 5.21508 22.1783 7.4078 23.0866C9.60051 23.9948 12.0133 24.2324 14.3411 23.7694C16.6689 23.3064 18.8071 22.1635 20.4853 20.4853C22.1635 18.8071 23.3064 16.6689 23.7694 14.3411C24.2324 12.0133 23.9948 9.60051 23.0866 7.4078C22.1783 5.21509 20.6402 3.34094 18.6668 2.02237C16.6935 0.703788 14.3734 1.79185e-07 12 0V4.8C13.424 4.8 14.8161 5.22227 16.0001 6.01342C17.1841 6.80456 18.107 7.92905 18.6519 9.24468C19.1969 10.5603 19.3395 12.008 19.0617 13.4047C18.7838 14.8013 18.0981 16.0842 17.0912 17.0912C16.0842 18.0981 14.8013 18.7838 13.4046 19.0617C12.008 19.3395 10.5603 19.1969 9.24468 18.6519C7.92905 18.107 6.80456 17.1841 6.01342 16.0001C5.22227 14.8161 4.8 13.424 4.8 12H0Z"
      className={dark ? "fill-primary-50" : "fill-primary"}
    />
    <path
      d="M12 0C9.89356 -2.5119e-08 7.82423 0.554475 6 1.6077C4.17577 2.66092 2.66092 4.17577 1.6077 6C0.554475 7.82423 -6.69564e-08 9.89356 0 12C6.69564e-08 14.1064 0.554475 16.1758 1.6077 18L5.76462 15.6C5.13268 14.5055 4.8 13.2639 4.8 12C4.8 10.7361 5.13268 9.49454 5.76462 8.4C6.39655 7.30546 7.30546 6.39655 8.4 5.76462C9.49454 5.13268 10.7361 4.8 12 4.8V0Z"
      className="fill-primary-25"
    />
  </svg>
);
