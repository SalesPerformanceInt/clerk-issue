import React, { FC } from "react";

import { useQuestionContext } from "~/components/Question";

export const Title: FC = () => {
  const { questionItem } = useQuestionContext();

  return (
    <div className="mb-2">
      <div className="text-primary-75 font-bold">{questionItem.title}</div>
      <div className="text-primary-75 text-xs font-semibold uppercase">
        {questionItem.taxonomy[0]?.title}
      </div>
    </div>
  );
};
