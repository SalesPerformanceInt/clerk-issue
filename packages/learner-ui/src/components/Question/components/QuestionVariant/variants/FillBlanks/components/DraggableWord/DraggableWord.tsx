import React, { type FC } from "react";

import { CSS } from "@dnd-kit/utilities";

import { useDraggable } from "~/utils/dnd";

import type {
  DraggableWordData,
  DraggableWordProps,
} from "./DraggableWord.types";

export const DraggableWord: FC<DraggableWordProps> = ({
  id,
  text,
  order,
  disabled,
  liveEdit,
}) => {
  const { attributes, listeners, setNodeRef, transform } =
    useDraggable<DraggableWordData>({
      id,
      disabled,
      data: { order },
    });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      className="cursor-pointer rounded-lg border-2 border-gray-500 bg-yellow-100 px-6 py-1 font-medium"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      {...liveEdit?.word}
      suppressHydrationWarning
      aria-describedby=""
    >
      {text}
    </div>
  );
};
