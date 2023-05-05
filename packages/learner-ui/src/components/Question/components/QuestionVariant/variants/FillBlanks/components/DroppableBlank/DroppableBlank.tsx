import React, { type FC } from "react";

import { useDroppable } from "@dnd-kit/core";

import type { DroppableBlankProps } from "./DroppableBlank.types";

export const DroppableBlank: FC<DroppableBlankProps> = ({
  children,
  id,
  order,
}) => {
  const { setNodeRef } = useDroppable({ id, data: { order } });

  return (
    <div
      ref={setNodeRef}
      className="mx-2 inline-flex h-12 w-60 items-center justify-center border-b-2 border-b-black align-top"
    >
      {children}
    </div>
  );
};
