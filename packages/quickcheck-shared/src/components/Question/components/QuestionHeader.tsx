import React, { FC } from "react";

import {
  Header,
  HeaderReturnToDashboard,
  HeaderUnansweredQuestions,
} from "~/components";
import { useQuestionContext } from "~/components/Question";

export const QuestionHeader: FC = () => {
  const { onClose, userData } = useQuestionContext();

  return (
    <Header
      left={<HeaderReturnToDashboard onClose={onClose} />}
      right={
        <HeaderUnansweredQuestions
          unansweredQuestions={userData?.unanswered_questions}
          user={userData}
          show
        />
      }
    />
  );
};
