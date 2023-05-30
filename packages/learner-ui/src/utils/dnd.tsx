import React, { type MutableRefObject } from "react";

import {
  DndContext as DndContextCore,
  useDraggable as useDraggableCore,
  useDroppable as useDroppableCore,
  type Active,
  type DndContextProps,
  type DragMoveEvent as DragMoveEventCore,
  type Over,
  type UniqueIdentifier,
  type UseDraggableArguments,
  type UseDroppableArguments,
} from "@dnd-kit/core";
import {
  useSortable as useSortableCore,
  type UseSortableArguments,
} from "@dnd-kit/sortable";

/**
 * Droppable
 */

type DroppableData = {
  order: number;
};

type UseDroppableTypesafeArgs = Omit<UseDroppableArguments, "data"> & {
  data?: DroppableData;
};

export function useDroppable(props: UseDroppableTypesafeArgs) {
  return useDroppableCore(props);
}

/**
 * Draggable
 */

type DraggableData = {
  order: number;
};

type UseDraggableTypesafeArgs = Omit<UseDraggableArguments, "data"> & {
  data?: DraggableData;
};

export function useDraggable(props: UseDraggableTypesafeArgs) {
  return useDraggableCore(props);
}

/**
 * Sortable
 */

type SortableData = {
  container?: UniqueIdentifier;
  text: string;
};

type UseSortableTypesafeArgs = Omit<UseSortableArguments, "data"> & {
  data: SortableData;
};

export function useSortable(props: UseSortableTypesafeArgs) {
  return useSortableCore(props);
}

/**
 * Drag Handlers
 */

type TypesafeActive = Omit<Active, "data"> & {
  data: MutableRefObject<SortableData>;
};

type TypesafeOver = Omit<Over, "data"> & {
  data: MutableRefObject<SortableData | undefined>;
};

type DragEvent = Omit<DragMoveEventCore, "active" | "over"> & {
  active: TypesafeActive;
  over: TypesafeOver | null;
};

export type DragStartEvent = Pick<DragEvent, "active">;
export type DragMoveEvent = DragEvent;
export type DragOverEvent = DragEvent;
export type DragEndEvent = DragEvent;

/**
 * DnD Context
 */

export type DndContextTypesafeProps = Omit<
  DndContextProps,
  "onDragStart" | "onDragMove" | "onDragOver" | "onDragEnd"
> & {
  onDragStart?: (event: DragStartEvent) => void;
  onDragMove?: (event: DragMoveEvent) => void;
  onDragOver?: (event: DragOverEvent) => void;
  onDragEnd?: (event: DragEndEvent) => void;
};

export function DndContext(props: DndContextTypesafeProps) {
  return <DndContextCore {...props} />;
}
