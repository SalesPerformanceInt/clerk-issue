import React, { type FC } from "react";

import { useDroppable } from "@dnd-kit/core";
import classNames from "classnames";

import type { DroppableContainerProps } from "./DroppableContainer.types";

export const DroppableContainer: FC<DroppableContainerProps> = ({
  children,
  id,
  className,
}) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className={classNames(className)}>
      {children}
    </div>
  );
};
