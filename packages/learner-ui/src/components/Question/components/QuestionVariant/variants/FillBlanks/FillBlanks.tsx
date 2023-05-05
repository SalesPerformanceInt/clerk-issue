import React, { Fragment, type FC } from "react";

import { DndContext } from "@dnd-kit/core";

import { FadeOutText } from "~/components/FadeOutText";
import { FeedbackSection } from "~/components/Question/components/QuestionVariant/components/FeedbackSection";

import { DraggableWord, DroppableBlank } from "./components";

import { useFillBlanks } from "./hooks/useFillBlanks";

import type { FillBlanksProps } from "./FillBlanks.types";

export const FillBlanks: FC<FillBlanksProps> = ({
  fillblanksquestion,
  currentTopic,
  totalScore,
  topicPercentage,
}) => {
  const { stems, slots, words, onDrop, isFeedbackActive, selected } =
    useFillBlanks({
      fillblanksquestion,
    });

  return (
    <DndContext onDragEnd={onDrop}>
      <div className="mb-5">
        <FadeOutText
          text={fillblanksquestion.prompt}
          hidden={false}
          className="mb-5 text-sm"
          $={{ text: fillblanksquestion.$?.prompt }}
        />

        <div className="mb-6">
          {stems.map((stem, stemIndex) => {
            const currentWord = words.find(
              (word) => word.order === stemIndex + 1,
            );

            return (
              <Fragment key={stem}>
                <span
                  className="text-2xl leading-[48px] [&>*]:inline-block"
                  dangerouslySetInnerHTML={{
                    __html: stem,
                  }}
                  {...fillblanksquestion.$?.stem}
                />

                {slots && slots[stemIndex] && (
                  <DroppableBlank id={stem} order={stemIndex + 1}>
                    {currentWord && (
                      <DraggableWord
                        key={currentWord._metadata.uid}
                        id={currentWord._metadata.uid}
                        text={currentWord.word}
                        order={currentWord.order}
                      />
                    )}
                  </DroppableBlank>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      {!isFeedbackActive && (
        <div className="fixed bottom-0 left-0 right-0 flex h-2/6 flex-col border-t-2 border-t-gray-200 bg-yellow-50 p-8">
          <p className="mb-8 text-sm" {...fillblanksquestion.$?.instruction}>
            {fillblanksquestion.instruction ?? ""}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {words.map(
              (word) =>
                word.order === 0 && (
                  <DraggableWord
                    key={word._metadata.uid}
                    id={word._metadata.uid}
                    text={word.word}
                    order={word.order}
                  />
                ),
            )}
          </div>
        </div>
      )}

      <FeedbackSection
        show={isFeedbackActive}
        selected={selected}
        currentTopic={currentTopic}
        totalScore={totalScore}
        topicPercentage={topicPercentage}
      >
        <div className="mt-2 flex flex-wrap gap-4">
          {words.map(
            (word) =>
              word.order === 0 && (
                <div
                  key={word._metadata.uid}
                  className="cursor-pointer rounded-lg border-2 border-gray-500 bg-gray-300 px-6 py-1 font-medium"
                >
                  {word.word}
                </div>
              ),
          )}
        </div>
      </FeedbackSection>
    </DndContext>
  );
};
