import React, { type FC } from "react";

import { isNumber } from "remeda";

import { useIsDesktop } from "~qcs/utils/useIsDesktop";

import {
  Header,
  HeaderReturnToDashboard,
  HeaderUnansweredQuestions,
} from "~qcs/components";
import { useQuestionContext } from "~qcs/components/Question";

export const QuestionHeader: FC = () => {
  const { userData, onShowOnCloseModal, submitted } = useQuestionContext();
  const isDesktop = useIsDesktop();

  const modifier = submitted ? 1 : 0;
  const unansweredQuestions =
    userData && Math.max((userData.unanswered_questions ?? 0) - modifier, 0);

  return (
    <Header
      left={<HeaderReturnToDashboard onClose={onShowOnCloseModal} />}
      right={
        isNumber(unansweredQuestions) && (
          <HeaderUnansweredQuestions
            unansweredQuestions={unansweredQuestions}
            short={!isDesktop}
          />
        )
      }
    />
  );
};
