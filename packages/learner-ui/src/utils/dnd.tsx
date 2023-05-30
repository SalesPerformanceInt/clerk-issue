import React, { type MutableRefObject } from "react";

import {
  DndContext as DndContextCore,
  useDraggable as useDraggableCore,
  useDroppable as useDroppableCore,
  type Active,
  type DndContextProps,
  type DragMoveEvent as DragMoveEventCore,
  type Over,
  type UseDraggableArguments,
  type UseDroppableArguments,
} from "@dnd-kit/core";
import {
  useSortable as useSortableCore,
  type UseSortableArguments,
} from "@dnd-kit/sortable";

/**
 * Utility Types
 */

type AnyData = Record<string, unknown>;

/**
 * Droppable
 */

type UseDroppableTypesafeArgs<T = undefined> = Omit<
  UseDroppableArguments,
  "data"
> & {
  data?: T;
};

export function useDroppable<T extends AnyData>(
  props: UseDroppableTypesafeArgs<T>,
) {
  return useDroppableCore(props);
}

/**
 * Draggable
 */

type UseDraggableTypesafeArgs<T = undefined> = Omit<
  UseDraggableArguments,
  "data"
> & {
  data?: T;
};

export function useDraggable<T extends AnyData>(
  props: UseDraggableTypesafeArgs<T>,
) {
  return useDraggableCore(props);
}

/**
 * Sortable
 */

type UseSortableTypesafeArgs<T = undefined> = Omit<
  UseSortableArguments,
  "data"
> & {
  data?: T;
};

export function useSortable<T extends AnyData>(
  props: UseSortableTypesafeArgs<T>,
) {
  return useSortableCore(props);
}

/**
 * Drag Handlers
 */

type TypesafeActive<T = undefined> = Omit<Active, "data"> & {
  data: MutableRefObject<T>;
};

type TypesafeOver<T = undefined> = Omit<Over, "data"> & {
  data: MutableRefObject<T>;
};

type DragEvent<Active = undefined, Over = undefined> = Omit<
  DragMoveEventCore,
  "active" | "over"
> & {
  active: TypesafeActive<Active>;
  over: TypesafeOver<Over> | null;
};

export type DragStartEvent<Active = undefined> = Pick<
  DragEvent<Active>,
  "active"
>;
export type DragMoveEvent<Active = undefined, Over = undefined> = DragEvent<
  Active,
  Over | undefined
>;
export type DragOverEvent<Active = undefined, Over = undefined> = DragEvent<
  Active,
  Over | undefined
>;
export type DragEndEvent<Active = undefined, Over = undefined> = DragEvent<
  Active,
  Over | undefined
>;

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
