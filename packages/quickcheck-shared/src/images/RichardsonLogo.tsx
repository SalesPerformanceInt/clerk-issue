import React, { type FC } from "react"

interface RichardsonLogoProps {
  className?: string
}

export const RichardsonLogo: FC<RichardsonLogoProps> = ({ className = "mr-6" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Logo">
      <path id="Vector" d="M2.5896 23.994H12.9061V13.6775L2.5896 23.994Z" fill="#EDE8E8" />
      <path
        id="Vector_2"
        d="M20.2891 16.611C22.5318 14.9275 23.982 12.2482 23.982 9.22802C23.982 4.13557 19.8585 0.00897084 14.769 0H0V7.36806H14.769V7.386C15.7797 7.39497 16.5991 8.21731 16.5991 9.23102V24H23.982C23.982 20.9738 22.5318 18.2946 20.2891 16.611Z"
        fill="#EDE8E8"
      />
      <path id="Vector_3" d="M0 11.0551V21.3596L10.3045 11.0551H0Z" fill="#EDE8E8" />
    </g>
  </svg>
)
