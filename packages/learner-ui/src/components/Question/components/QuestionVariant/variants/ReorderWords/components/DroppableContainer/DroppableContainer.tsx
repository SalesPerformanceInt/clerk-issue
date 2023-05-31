import React, { type FC } from "react";

import classNames from "classnames";

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
    <div ref={setNodeRef} className={classNames(className)} {...liveEdit}>
      {children}
    </div>
  );
};
