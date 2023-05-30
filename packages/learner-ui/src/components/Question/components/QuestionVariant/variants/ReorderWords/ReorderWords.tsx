/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { type FC } from "react";
import { createPortal } from "react-dom";

import { DndContext, DragOverlay } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import { DroppableContainer, ReorderableWord } from "./components";

import { useReorderWords } from "./hooks/useReorderWords";

import type { ReorderWordsProps } from "./ReorderWords.types";

export const ReorderWords: FC<ReorderWordsProps> = ({
  reorderwordsquestion,
}) => {
  const {
    reorderableWords,
    activeWord,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  } = useReorderWords({ reorderwordsquestion });

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={reorderableWords.answer} strategy={() => null}>
        <DroppableContainer id="answer">
          {reorderableWords.answer.map(({ id, text }) => (
            <ReorderableWord
              key={id}
              id={id}
              text={text}
              container="answer"
              disabled={false}
            />
          ))}
        </DroppableContainer>
      </SortableContext>

      <SortableContext items={reorderableWords.words} strategy={() => null}>
        <DroppableContainer id="words">
          {reorderableWords.words.map(({ id, text }) => (
            <ReorderableWord
              key={id}
              id={id}
              text={text}
              container="words"
              disabled={false}
            />
          ))}
        </DroppableContainer>
      </SortableContext>

      {createPortal(
        <DragOverlay>
          {activeWord ? (
            <ReorderableWord
              id={activeWord.id}
              text={activeWord.text}
              disabled={true}
            />
          ) : null}
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );
};
