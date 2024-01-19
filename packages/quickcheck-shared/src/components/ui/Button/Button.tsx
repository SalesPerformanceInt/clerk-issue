import React from "react";

import { faSpinner } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "~/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import { useIsDesktop } from "~/utils/useIsDesktop";

import { Icon, IconProps } from "~/components/Icon";

const buttonVariants = cva(
  "border border-transparent px-6 py-2 inline-flex items-center relative justify-center box-border rounded-sm text-base text-contrast font-base ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:text-primary-50",
  {
    variants: {
      background: {
        dark: "bg-primary-75 disabled:bg-primary-75",
        light: "bg-primary disabled:bg-primary-25",
      },
      variant: {
        primary: "",
        secondary: "",
      },
      isDesktop: {
        false: "w-full",
        true: "",
      },
    },
    compoundVariants: [
      {
        background: "dark",
        variant: "secondary",
        class: "bg-primary border-primary-25 disabled:border-0",
      },
      {
        background: "light",
        variant: "secondary",
        class: "bg-transparent text-primary border-primary disabled:border-0",
      },
    ],
    defaultVariants: {
      background: "dark",
      variant: "primary",
      isDesktop: false,
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps,
    "isDesktop" | "children"
  > {
  rightIcon?: IconProps["icon"];
  loading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      background = "dark",
      variant = "primary",
      rightIcon,
      children,
      loading,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDesktop = useIsDesktop();

    return (
      <button
        className={cn(
          buttonVariants({ background, variant, isDesktop, className }),
        )}
        ref={ref}
        disabled={loading || disabled}
        {...props}
      >
        {loading && (
          <FontAwesomeIcon
            icon={faSpinner}
            spinPulse
            className="absolute left-0 right-0 m-auto"
          />
        )}

        <div
          className={twMerge(
            "flex items-center justify-center",
            loading && "invisible",
          )}
        >
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
                className="text-center text-base font-light leading-6"
              />
            </div>
          )}
        </div>
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
