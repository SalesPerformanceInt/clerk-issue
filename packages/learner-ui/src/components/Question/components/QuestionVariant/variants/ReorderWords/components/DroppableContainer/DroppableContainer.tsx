import React, { type FC } from "react";

import { useDroppable } from "@dnd-kit/core";

import type { DroppableContainerProps } from "./DroppableContainer.types";

export const DroppableContainer: FC<DroppableContainerProps> = ({
  children,
  id,
}) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="flex h-full min-h-[48px] w-full flex-wrap items-center rounded border-2 border-solid border-gray-200 px-4 py-2"
    >
      {children}
    </div>
  );
};
