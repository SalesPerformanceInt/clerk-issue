import { useMemo, useState } from "react";

import { arrayMove } from "@dnd-kit/sortable";
import objectHash from "object-hash";

import type { DragOverEvent, DragStartEvent } from "~/utils/dnd";

import { useQuestionContext } from "~/components/Question";

import type {
  ReorderWordsProps,
  ReorderableItem,
  ReorderableWords,
} from "../ReorderWords.types";
import type { ReorderableWordData } from "../components/ReorderableWord/ReorderableWord.types";

type UseReorderWordsProps = Pick<ReorderWordsProps, "reorderwordsquestion">;

type Items = "words" | "answer";

export const useReorderWords = ({
  reorderwordsquestion,
}: UseReorderWordsProps) => {
  const { isFeedbackActive, onSelection } = useQuestionContext();

  /**
   * Set Sortable Items
   */

  const correctWordsOrder = useMemo(
    () =>
      reorderwordsquestion.stem
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)),
    [reorderwordsquestion],
  );
  const [reorderableWords, setReorderableWords] = useState<ReorderableWords>({
    answer: [],
    words: correctWordsOrder.map((word, index) => ({
      id: objectHash({ word, index }),
      text: word,
    })),
  });

  const [activeWord, setActiveWord] = useState<ReorderableItem | null>(null);

  /**
   * Handlers
   */

  const handleDragStart = ({ active }: DragStartEvent<ReorderableWordData>) => {
    setActiveWord({
      id: active.id,
      text: active.data.current.text,
    });
  };

  const handleDragOver = ({
    active,
    over,
  }: DragOverEvent<ReorderableWordData, ReorderableWordData>) => {
    if (!over || !over.id) return null;

    const activeContainer = active.data.current.container as Items;
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

    handleCompleteAnswer();
  };

  /**
   * Complete Answer
   */

  const handleCompleteAnswer = () => {
    if (reorderableWords.answer.length !== correctWordsOrder.length) return;

    const correct = reorderableWords.answer.every(
      (word, index) => word.text === correctWordsOrder[index],
    );

    onSelection({
      correct,
      feedback: correct
        ? reorderwordsquestion.feedback
        : reorderwordsquestion.incorrect_feedback,
      feedbackLiveEdit: correct
        ? reorderwordsquestion.$?.feedback
        : reorderwordsquestion.$?.incorrect_feedback,
      uid: reorderwordsquestion._metadata.uid,
    });
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
    isFeedbackActive,
  };
};
