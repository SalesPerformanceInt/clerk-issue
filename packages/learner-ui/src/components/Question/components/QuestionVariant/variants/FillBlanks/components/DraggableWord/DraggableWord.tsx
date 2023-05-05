import React, { type FC } from "react";

import { useDraggable } from "@dnd-kit/core";

import type { DraggableWordProps } from "./DraggableWord.types";

export const DraggableWord: FC<DraggableWordProps> = ({ id, text, order }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { order },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      className="cursor-pointer rounded-lg border-2 border-gray-500 bg-yellow-100 px-6 py-1 font-medium"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      suppressHydrationWarning
      aria-describedby=""
    >
      {text}
    </div>
  );
};
