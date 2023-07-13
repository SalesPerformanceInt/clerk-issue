import React, { HTMLAttributes, type FC } from "react";

import { twMerge } from "tailwind-merge";

import { Card, CardTitle } from "~/components/ui/Card";

type ProgressCardProps = HTMLAttributes<HTMLDivElement>;

const ProgressCard: FC<ProgressCardProps> = ({ children, className }) => {
  return (
    <Card className={twMerge("w-96", className)}>
      <CardTitle qty={4} title="Active Enrollments" className="p-6 pb-0" />

      {children}
    </Card>
  );
};

export { ProgressCard, type ProgressCardProps };
