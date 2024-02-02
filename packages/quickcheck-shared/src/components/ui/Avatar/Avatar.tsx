import React, {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "~qcs/utils";

export type AvatarProps = Omit<
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
  "children"
> & {
  src?: string;
  initials: string;
};

const Avatar = forwardRef<ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, src, initials, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex h-6 w-6 shrink-0 overflow-hidden rounded-full bg-primary-50 text-xs font-semibold uppercase leading-4 text-background",
        className,
      )}
      {...props}
    >
      {src && <AvatarImage src={src} />}
      <AvatarFallback>{initials}</AvatarFallback>
    </AvatarPrimitive.Root>
  ),
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

export type AvatarImageProps = ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Image
>;

const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export type AvatarFallbackProps = ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Fallback
>;

const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "bg-muted flex h-full w-full items-center justify-center rounded-full",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
