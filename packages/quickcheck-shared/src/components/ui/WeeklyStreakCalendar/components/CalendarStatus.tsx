import React, { forwardRef, type ElementRef } from "react";

import { faCheck } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "~/utils";
import { cva } from "class-variance-authority";

import { AvatarFallback } from "~/components";

const calendarStatusVariants = cva(
  "relative flex h-5 w-5 shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      activity: {
        false: "bg-primary-25",
        true: "bg-primary-75",
      },
      future: {
        true: "bg-background border border-primary-25",
        false: "",
      },
    },
    defaultVariants: {
      future: false,
    },
  },
);

export type CalendarStatusProps = {
  future?: boolean;
  activity: boolean;
  className?: string;
};

const CalendarStatus = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  CalendarStatusProps
>(({ activity, future, className }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(calendarStatusVariants({ activity, future, className }))}
  >
    {activity && !future && (
      <AvatarFallback>
        <FontAwesomeIcon
          icon={faCheck}
          className={"text-center text-xs leading-4 text-primary-25"}
        />
      </AvatarFallback>
    )}
  </AvatarPrimitive.Root>
));

CalendarStatus.displayName = "CalendarStatus";

export { CalendarStatus };
