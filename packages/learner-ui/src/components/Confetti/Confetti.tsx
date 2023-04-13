import React from "react";
import RCConfetti, { type Props as RCConfettiProps } from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export const Confetti = (props: RCConfettiProps) => {
  const { width, height } = useWindowSize();

  return <RCConfetti width={width} height={height} {...props} />;
};
