import React, { ReactNode, forwardRef } from "react";

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
    <div ref={ref} className={twMerge("w-full flex justify-center", className)}>
      <div className="w-full max-w-desktop sm:px-6 lg:px-0">{children}</div>
    </div>
  );
});

ResponsiveContainer.displayName = "ResponsiveContainer";
