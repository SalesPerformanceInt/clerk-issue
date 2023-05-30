/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { type FC } from "react";
import { createPortal } from "react-dom";

import { DndContext, DragOverlay } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import { BottomDrawer, Container, FadeOutText } from "~/components";

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
      <div className="mb-5">
        <FadeOutText
          text={reorderwordsquestion.prompt}
          hidden={false}
          className="mb-5 text-sm"
          liveEdit={reorderwordsquestion.$?.prompt}
        />

        <SortableContext items={reorderableWords.answer} strategy={() => null}>
          <DroppableContainer
            id="answer"
            className="flex h-full min-h-[48px] w-full flex-wrap items-center gap-x-6 gap-y-4 rounded border-2 border-solid border-gray-200 px-4 py-2"
          >
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
      </div>

      <BottomDrawer height={"33%"} show>
        <Container className="flex-col border-t-2 border-t-gray-200 bg-yellow-50 p-8">
          <p className="mb-8 text-sm" {...reorderwordsquestion.$?.instruction}>
            {reorderwordsquestion.instruction ?? ""}
          </p>

          <SortableContext items={reorderableWords.words} strategy={() => null}>
            <DroppableContainer
              id="words"
              className="flex flex-wrap gap-x-6 gap-y-4"
            >
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
        </Container>
      </BottomDrawer>

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
