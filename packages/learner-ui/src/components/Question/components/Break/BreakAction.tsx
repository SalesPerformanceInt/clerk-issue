import React, { FC } from "react";

import { Button } from "~/components";
import { useQuestionContext } from "~/components/Question";

export const BreakAction: FC = () => {
  const { onClose } = useQuestionContext();
  return (
    <div className="flex justify-center space-x-5">
      <Button
        onClick={onClose}
        className="max-w-[200px] flex-[2] bg-lime-200 hover:bg-lime-300"
      >
        Go to dashboard
      </Button>
    </div>
  );
};
