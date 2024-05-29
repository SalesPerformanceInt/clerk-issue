import React from "react"

import { faSpinner } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

import { cn } from "~qcs/utils"
import { useIsDesktop } from "~qcs/utils/useIsDesktop"

import { Icon, IconProps } from "~qcs/components/Icon"

import { buttonVariants } from "./Button"

export type LinkButtonVariantProps = VariantProps<typeof buttonVariants>

export interface LinkButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkButtonVariantProps, "isDesktop" | "children"> {
  rightIcon?: IconProps["icon"]
  rightIconClassName?: string
  loading?: boolean
  children: React.ReactNode
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    { className, background = "dark", variant = "primary", rightIcon, children, loading, rightIconClassName, ...props },
    ref,
  ) => {
    const isDesktop = useIsDesktop()

    return (
      <a className={cn(buttonVariants({ background, variant, isDesktop, className }))} ref={ref} {...props}>
        {loading && <FontAwesomeIcon icon={faSpinner} spinPulse className="absolute left-0 right-0 m-auto" />}

        <div className={twMerge("flex items-center justify-center", loading && "invisible")}>
          {children}
          {rightIcon && (
            <div
              className={twMerge(
                "flex items-center",
                !isDesktop && "absolute bottom-2 right-6 top-2",
                isDesktop && "ml-4",
              )}
            >
              <Icon
                icon={rightIcon}
                className={twMerge("text-center text-base font-light leading-6", rightIconClassName)}
              />
            </div>
          )}
        </div>
      </a>
    )
  },
)
LinkButton.displayName = "LinkButton"

export { LinkButton }
