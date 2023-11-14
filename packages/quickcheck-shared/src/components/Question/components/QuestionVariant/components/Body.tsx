import React, { FC } from "react";

import parse from "html-react-parser";

interface BodyProps {
  content: string;
}

export const Body: FC<BodyProps> = ({ content }) => {
  return (
    <div
      className="text-xl font-semibold leading-8 text-primary"
      data-testid="QuestionItem-Stem"
    >
      {parse(content)}
    </div>
  );
};
