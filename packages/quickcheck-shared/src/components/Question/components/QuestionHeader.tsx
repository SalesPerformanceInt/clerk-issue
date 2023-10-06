import React, { FC } from "react";

import {
  Header,
  HeaderReturnToDashboard,
  HeaderUnansweredQuestions,
} from "~/components";
import { useQuestionContext } from "~/components/Question";

export const QuestionHeader: FC = () => {
  const { userData, onShowOnCloseModal } = useQuestionContext();

  return (
    <Header
      left={<HeaderReturnToDashboard onClose={onShowOnCloseModal} />}
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
