import React, { FC } from "react";

interface BodyProps {
  content: string;
}

export const Body: FC<BodyProps> = ({ content }) => {
  return (
    <h2 className="text-xxl text-primary font-semibold leading-8">{content}</h2>
  );
};
