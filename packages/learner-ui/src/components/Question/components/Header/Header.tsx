import React, { FC } from "react";

import { useQuestionContext } from "~/components/Question";
import { WhiteCircleX } from "~/components/images/WhiteCircleX";

export const Header: FC = () => {
  const { currentTopic, onClose, onBreak } = useQuestionContext();

  if (onBreak) return null;

  return (
    <div className="bg-plum-100 flex flex-col flex-wrap px-5 pb-3 pt-4">
      <button onClick={onClose} className="items-cente flex p-2">
        <WhiteCircleX className="h-5 w-5" alt="close" />
      </button>

      <div className="self-end">
        <p className="text-white">
          Current Topic: <strong> {currentTopic} </strong>
        </p>
      </div>
    </div>
  );
};
