import React, { type FC } from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import type { ReorderableItemProps } from "./ReorderableItem.types";

export const ReorderableItem: FC<ReorderableItemProps> = ({
  id,
  text,
  disabled,
  liveEdit,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id, disabled });

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
      {...liveEdit?.text}
      suppressHydrationWarning
      aria-describedby=""
    >
      {text}
    </div>
  );
};
