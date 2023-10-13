import React, { FC } from "react";

import {
  Header,
  HeaderReturnToDashboard,
  HeaderUnansweredQuestions,
} from "~/components";
import { useQuestionContext } from "~/components/Question";

export const QuestionHeader: FC = () => {
  const { userData, onShowOnCloseModal, submitted } = useQuestionContext();

  const modifier = submitted ? 1 : 0;
  const unansweredQuestions = (userData?.unanswered_questions ?? 0) - modifier;

  return (
    <Header
      left={<HeaderReturnToDashboard onClose={onShowOnCloseModal} />}
      right={
        <HeaderUnansweredQuestions
          unansweredQuestions={unansweredQuestions}
          user={userData}
          show
        />
      }
    />
  );
};
