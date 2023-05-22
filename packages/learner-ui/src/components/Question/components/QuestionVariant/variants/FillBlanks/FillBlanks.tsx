import React, { Fragment, type FC } from "react";

import { DndContext } from "@dnd-kit/core";

import { cleanHTML } from "~/utils/cleanHtml";

import { BottomDrawer, Container, FadeOutText } from "~/components";
import { FeedbackSection } from "~/components/Question/components/QuestionVariant/components/FeedbackSection";

import { DraggableWord, DroppableBlank } from "./components";

import { useFillBlanks } from "./hooks/useFillBlanks";

import type { FillBlanksProps } from "./FillBlanks.types";

export const FillBlanks: FC<FillBlanksProps> = ({ fillblanksquestion }) => {
  const { stems, slots, words, onDrop, isFeedbackActive } = useFillBlanks({
    fillblanksquestion,
  });

  return (
    <DndContext onDragEnd={onDrop}>
      <div className="mb-5">
        <FadeOutText
          text={fillblanksquestion.prompt}
          hidden={false}
          className="mb-5 text-sm"
          liveEdit={fillblanksquestion.$?.prompt}
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
                    __html: cleanHTML(stem),
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
                        liveEdit={currentWord.$}
                        disabled={isFeedbackActive}
                      />
                    )}
                  </DroppableBlank>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      <BottomDrawer height={"33%"} show={!isFeedbackActive}>
        <Container className="flex-col border-t-2 border-t-gray-200 bg-yellow-50 p-8">
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
                    liveEdit={word.$}
                    disabled={isFeedbackActive}
                  />
                ),
            )}
          </div>
        </Container>
      </BottomDrawer>

      <FeedbackSection>
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
