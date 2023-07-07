import React, { ReactNode, forwardRef } from "react";

import { twMerge } from "tailwind-merge";

interface ResponseiveContainerProps {
    className?: string
    children: ReactNode
}

export const ResponsiveContainer = forwardRef<HTMLDivElement, ResponseiveContainerProps>(({className, children }, ref) => {
  return (
    <div ref={ref} className={twMerge("w-full flex justify-center", className)}>
      <div className="w-full sm:w-3/4 lg:w-2/3">
        {children}
      </div>
    </div>
  );
});

ResponsiveContainer.displayName = 'ResponsiveContainer'
