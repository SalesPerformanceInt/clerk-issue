import React, { type FC } from "react";

import { twMerge } from "tailwind-merge";

import { useDroppable } from "~/utils/dnd";

import type { DroppableContainerProps } from "./DroppableContainer.types";

export const DroppableContainer: FC<DroppableContainerProps> = ({
  children,
  id,
  className,
  liveEdit,
}) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className={twMerge(className)} {...liveEdit}>
      {children}
    </div>
  );
};
