import React, { forwardRef, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface ResponsiveContainerProps {
  className?: string;
  children: ReactNode;
}

export const ResponsiveContainer = forwardRef<
  HTMLDivElement,
  ResponsiveContainerProps
>(({ className, children }, ref) => {
  return (
    <div ref={ref} className={twMerge("flex w-full justify-center", className)}>
      <div className="w-full max-w-desktop px-0 sm:px-6 lg:px-0">
        {children}
      </div>
    </div>
  );
});

ResponsiveContainer.displayName = "ResponsiveContainer";
