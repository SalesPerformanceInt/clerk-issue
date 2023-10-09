import React, { FC } from "react";

import parse from "html-react-parser";

interface BodyProps {
  content: string;
}

export const Body: FC<BodyProps> = ({ content }) => {
  return (
    <div className="text-xl text-primary font-semibold leading-8">
      {parse(content)}
    </div>
  );
};
