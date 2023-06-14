import { useMemo, useState } from "react";

import type { DragEndEvent } from "~/utils/dnd";

import { useQuestionContext } from "~/components/Question";

import type { DraggableWord, FillBlanksProps } from "../FillBlanks.types";
import type { DraggableWordData } from "../components/DraggableWord/DraggableWord.types";

const SLOTS_REGEX = /_{2,}/g;

type UseFillBlanksProps = Pick<FillBlanksProps, "fillblanksquestion">;

export const useFillBlanks = ({ fillblanksquestion }: UseFillBlanksProps) => {
  const { isFeedbackActive, onSelection } = useQuestionContext();

  /**
   * Set Slots
   */

  const slots = useMemo(
    () => fillblanksquestion.stem.match(SLOTS_REGEX),
    [fillblanksquestion.stem],
  );
  const stems = useMemo(
    () => fillblanksquestion.stem.split(SLOTS_REGEX).map((stem) => stem.trim()),
    [fillblanksquestion.stem],
  );

  /**
   * Set Draggable Words
   */

  const draggableWords = useMemo<DraggableWord[]>(
    () =>
      fillblanksquestion.draggable_words.map(({ draggable_word }) => ({
        ...draggable_word,
        order: 0,
      })),
    [fillblanksquestion.draggable_words],
  );

  const [words, setWords] = useState<DraggableWord[]>(draggableWords);

  /**
   * Handlers
   */

  const onDrop = (
    event: DragEndEvent<DraggableWordData, DraggableWordData>,
  ) => {
    if (!event.over) return null;

    const newWords = words.map((word) => ({
      ...word,
      order:
        event.active.id !== word._metadata.uid
          ? event.over?.data.current?.order === word.order
            ? event.active.data.current.order
            : word.order
          : event.over?.data.current?.order || word.order,
    }));

    const filledSlots = newWords.filter((word) => word.order !== 0);
    if (filledSlots.length === slots?.length) onComplete(filledSlots);

    setWords(newWords);
  };

  const onComplete = (filledSlots: DraggableWord[]) => {
    const correct = filledSlots.every((slot) =>
      fillblanksquestion.draggable_words.find(
        ({ draggable_word }) =>
          slot.word === draggable_word.word &&
          slot.order === draggable_word.order,
      ),
    );

    onSelection({
      correct,
      feedback: correct
        ? fillblanksquestion.feedback
        : fillblanksquestion.incorrect_feedback,
      feedbackLiveEdit: correct
        ? fillblanksquestion.$?.feedback
        : fillblanksquestion.$?.incorrect_feedback,
      value: JSON.stringify(filledSlots.map(({ _metadata }) => _metadata.uid)),
    });
  };

  return {
    stems,
    slots,
    words,
    isFeedbackActive,
    onDrop,
  };
};
