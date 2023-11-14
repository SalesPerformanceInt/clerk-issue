import React, { FC } from "react";

import { useQuestionContext } from "~/components/Question";

export const Title: FC = () => {
  const { questionItem, enrollmentTaxonomy } = useQuestionContext();

  return (
    <div className="mb-2" data-testid="QuestionItem-Taxonomy">
      {enrollmentTaxonomy && (
        <div className="font-bold text-primary-75">
          {enrollmentTaxonomy.display_name}
        </div>
      )}

      <div className="text-xs font-semibold uppercase text-primary-75">
        {questionItem.topic[0]?.display_name}
      </div>
    </div>
  );
};
