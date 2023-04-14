import React, { useEffect, useState } from "react";
import RCConfetti, { type Props as RCConfettiProps } from "react-confetti";
import { useWindowSize } from "react-use";

export const Confetti = (props: RCConfettiProps) => {
  const [loaded, setLoaded] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return <RCConfetti width={width} height={height} {...props} />;
};
