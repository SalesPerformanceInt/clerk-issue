import React, { type FC } from "react";

import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import { FadeOutText } from "~/components/FadeOutText";
import { FeedbackSection } from "~/components/Question/components/QuestionVariant/components/FeedbackSection";

import { ReorderableItem } from "./components";

import { useReorderList } from "./hooks/useReorderList";

import type { ReorderListProps } from "./ReorderList.types";

export const ReorderList: FC<ReorderListProps> = ({
  reorderlistquestion,
  currentTopic,
  totalScore,
  topicPercentage,
}) => {
  const { listItems, onDrop, selected, isFeedbackActive } = useReorderList({
    reorderlistquestion,
  });

  return (
    <DndContext onDragEnd={onDrop}>
      <div className="mb-5">
        <FadeOutText
          text={reorderlistquestion.prompt}
          hidden={false}
          className="mb-5 text-sm"
          $={{ text: reorderlistquestion.$?.prompt }}
        />

        <div
          className="question-stem mb-6 [&>*]:!mb-4 [&>*]:max-w-full [&>p]:text-2xl"
          dangerouslySetInnerHTML={{
            __html: reorderlistquestion.stem,
          }}
          {...reorderlistquestion.$?.stem}
        />

        <FadeOutText
          text={reorderlistquestion.instruction}
          hidden={false}
          className="text-sm"
          $={{ text: reorderlistquestion.$?.instruction }}
        />
      </div>

      <div className="space-y-4">
        <SortableContext items={listItems}>
          {listItems.map((item) => (
            <ReorderableItem
              key={item.id}
              id={item.id}
              text={item.text}
              liveEdit={item.$}
              disabled={isFeedbackActive}
            />
          ))}
        </SortableContext>

        <FeedbackSection
          show={isFeedbackActive}
          selected={selected}
          currentTopic={currentTopic}
          totalScore={totalScore}
          topicPercentage={topicPercentage}
        />
      </div>
    </DndContext>
  );
};
