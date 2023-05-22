import React, { FC } from "react";

import { Confetti } from "~/components";
import { useQuestionContext } from "~/components/Question";

export const QuestionConfetti: FC = () => {
  const { numberOfConfettiPieces, onConfettiComplete } = useQuestionContext();
  if (!numberOfConfettiPieces) return null;

  return (
    <Confetti
      recycle={false}
      gravity={0.2}
      numberOfPieces={numberOfConfettiPieces}
      onConfettiComplete={onConfettiComplete}
    />
  );
};
