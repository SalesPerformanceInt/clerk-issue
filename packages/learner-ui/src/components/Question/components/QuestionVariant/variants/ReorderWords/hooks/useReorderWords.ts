/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useMemo, useState } from "react";

import type { DragOverEvent, DragStartEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import objectHash from "object-hash";

import type {
  ReorderWordsProps,
  ReorderableItem,
  ReorderableWords,
} from "../ReorderWords.types";

type UseReorderWordsProps = Pick<ReorderWordsProps, "reorderwordsquestion">;

type Items = "words" | "answer";

export const useReorderWords = ({
  reorderwordsquestion,
}: UseReorderWordsProps) => {
  /**
   * Set Sortable Items
   */

  const correctWordsOrder = useMemo(
    () => reorderwordsquestion.stem.split(" "),
    [reorderwordsquestion],
  );
  const [reorderableWords, setReorderableWords] = useState<ReorderableWords>({
    answer: [],
    words: correctWordsOrder.map((word) => ({
      id: objectHash(word),
      text: word,
    })),
  });

  const [activeWord, setActiveWord] = useState<ReorderableItem | null>(null);

  /**
   * Handlers
   */

  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveWord({
      id: active.id,
      text: active.data.current?.text,
    });
  };

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    if (!over || !over.id) return null;

    const activeContainer = active.data.current?.container as Items;
    const overContainer = (over.data.current?.container || over.id) as Items;

    setReorderableWords((words) => {
      const activeWords = words[activeContainer];
      const overWords = words[overContainer];

      const activeIndex = activeWords.findIndex(
        (word) => word.id === active.id,
      );
      const overIndex = overWords.findIndex((word) => word.id === over.id);
      const newOverIndex = overIndex >= 0 ? overIndex : overWords.length + 1;

      const newActiveWords =
        activeContainer === overContainer
          ? arrayMove(activeWords, activeIndex, overIndex)
          : activeWords.filter((word) => word.id !== active.id);

      const newOverWords =
        activeContainer === overContainer
          ? newActiveWords
          : [
              ...overWords.slice(0, newOverIndex),
              activeWords[activeIndex],
              ...overWords.slice(newOverIndex),
            ];

      return {
        ...words,
        [activeContainer]: newActiveWords,
        [overContainer]: newOverWords,
      };
    });
  };

  const handleDragEnd = () => {
    setActiveWord(null);
  };

  /**
   * Return
   */

  return {
    reorderableWords,
    activeWord,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  };
};
