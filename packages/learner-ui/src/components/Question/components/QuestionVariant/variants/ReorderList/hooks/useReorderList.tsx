import { useState } from "react";

import type { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import { useQuestionContext } from "~/components/Question";

import type {
  ReorderListProps,
  ReorderableListItem,
} from "../ReorderList.types";

type UseReorderListProps = Pick<ReorderListProps, "reorderlistquestion">;

export const useReorderList = ({
  reorderlistquestion,
}: UseReorderListProps) => {
  const { isFeedbackActive, onSelection } = useQuestionContext();

  /**
   * Set List Items
   */

  const [listItems, setListItems] = useState<ReorderableListItem[]>(
    reorderlistquestion.list.map(({ item }) => ({
      text: item.text,
      id: item._metadata.uid,
      $: item.$,
    })),
  );

  /**
   * Handlers
   */

  const onDrop = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return null;

    const oldIndex = listItems.findIndex((item) => item.id === active.id);
    const newIndex = listItems.findIndex((item) => item.id === over.id);

    const userAnswerItems = arrayMove(listItems, oldIndex, newIndex);

    onComplete(userAnswerItems);
    setListItems(userAnswerItems);
  };

  const onComplete = (userAnswerItems: ReorderableListItem[]) => {
    const correct = userAnswerItems.every((userItem, userItemIndex) =>
      reorderlistquestion.list.find(
        ({ item }) =>
          item.text === userItem.text && item.order === userItemIndex + 1,
      ),
    );

    onSelection({
      correct,
      feedback: correct
        ? reorderlistquestion.feedback
        : reorderlistquestion.incorrect_feedback,
      feedbackLiveEdit: correct
        ? reorderlistquestion.$?.feedback
        : reorderlistquestion.$?.incorrect_feedback,
    });
  };

  /**
   * Return
   */

  return {
    listItems,
    onDrop,
    isFeedbackActive,
  };
};
