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

export type DragStartEvent<Active = AnyData> = Pick<
  DragEvent<Active>,
  "active"
>;
export type DragMoveEvent<Active = AnyData, Over = AnyData> = DragEvent<
  Active,
  Over | undefined
>;
export type DragOverEvent<Active = AnyData, Over = AnyData> = DragEvent<
  Active,
  Over | undefined
>;
export type DragEndEvent<Active = AnyData, Over = AnyData> = DragEvent<
  Active,
  Over | undefined
>;

/**
 * DnD Context
 */

export type DndContextTypesafeProps<Active = AnyData, Over = AnyData> = Omit<
  DndContextProps,
  "onDragStart" | "onDragMove" | "onDragOver" | "onDragEnd"
> & {
  onDragStart?: (event: DragStartEvent<Active>) => void;
  onDragMove?: (event: DragMoveEvent<Active, Over>) => void;
  onDragOver?: (event: DragOverEvent<Active, Over>) => void;
  onDragEnd?: (event: DragEndEvent<Active, Over>) => void;
};

export function DndContext<
  Active extends AnyData = AnyData,
  Over extends AnyData = AnyData,
>(props: DndContextTypesafeProps<Active, Over>) {
  return <DndContextCore {...props} />;
}
