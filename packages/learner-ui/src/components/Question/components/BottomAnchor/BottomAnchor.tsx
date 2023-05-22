import React, { FC } from "react";

import { useQuestionContext } from "~/components/Question";

export const BottomAnchor: FC = () => {
  const { bottomRef } = useQuestionContext();

  return <div ref={bottomRef} />;
};
