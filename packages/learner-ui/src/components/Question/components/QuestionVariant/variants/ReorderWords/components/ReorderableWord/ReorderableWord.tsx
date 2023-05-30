import React, { type FC } from "react";

import { CSS } from "@dnd-kit/utilities";

import { useSortable } from "~/utils/dnd";

import type { ReorderableWordProps } from "./ReorderableWord.types";

export const ReorderableWord: FC<ReorderableWordProps> = ({
  id,
  text,
  container,
  disabled,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id, disabled, data: { text, container } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

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
