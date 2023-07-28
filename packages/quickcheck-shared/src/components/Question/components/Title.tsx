import React, { FC } from "react";

import { useQuestionContext } from "~/components/Question";

export const Title: FC = () => {
  const { questionItem, enrollmentTaxonomy } = useQuestionContext();

  return (
    <div className="mb-2">
      {enrollmentTaxonomy && (
        <div className="text-primary-75 font-bold">
          {enrollmentTaxonomy.display_name}
        </div>
      )}
      <div className="text-primary-75 text-xs font-semibold uppercase">
        {questionItem.topic[0]?.display_name}
      </div>
    </div>
  );
};
