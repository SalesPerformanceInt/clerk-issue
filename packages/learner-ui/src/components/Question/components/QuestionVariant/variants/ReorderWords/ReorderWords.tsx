/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, type FC } from "react";
import { createPortal } from "react-dom";

import { DndContext, DragOverlay } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

import { DroppableContainer, ReorderableWord } from "./components";

import type {
  ReorderWordsProps,
  ReorderableItem,
  ReorderableWords,
} from "./ReorderWords.types";

export const ReorderWords: FC<ReorderWordsProps> = ({
  reorderwordsquestion,
}) => {
  const [reorderableWords, setReorderableWords] = useState<ReorderableWords>({
    answer: [],
    words: [
      { id: "1", text: "The" },
      { id: "2", text: "Quick" },
      { id: "3", text: "Brown" },
      { id: "4", text: "Fox" },
      { id: "5", text: "Jumps" },
      { id: "6", text: "Over" },
      { id: "7", text: "The" },
      { id: "8", text: "Lazy" },
      { id: "9", text: "Dog" },
      { id: "10", text: "And" },
      { id: "11", text: "Bites" },
      { id: "12", text: "The" },
      { id: "13", text: "Cat" },
    ],
  });

  const [activeWord, setActiveWord] = useState<ReorderableItem | null>(null);

  return (
    <DndContext
      onDragStart={(start) => {
        console.log({ onDragStart: start });
        setActiveWord({
          id: start.active.id,
          text: start.active.data.current?.text,
        });
      }}
      onDragOver={(over) => {
        console.log({ onDragOver: over });

        if (!over.over) return null;

        const currentWord: ReorderableItem = {
          id: over.active.id,
          text: over.active.data.current?.text,
        };

        const overWord: ReorderableItem = {
          id: over.over.id,
          text: over.over.data.current?.text,
        };

        const words = arrayMove(
          reorderableWords.words,
          reorderableWords.words.findIndex(
            (word) => word.id === currentWord.id,
          ),
          reorderableWords.words.findIndex((word) => word.id === overWord.id),
        );

        setReorderableWords({
          ...reorderableWords,
          words,
        });
      }}
      onDragEnd={(end) => {
        console.log({ onDragEnd: end });
        setActiveWord(null);
      }}
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
