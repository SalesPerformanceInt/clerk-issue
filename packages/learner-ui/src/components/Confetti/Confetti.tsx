import React, { FC, useEffect, useState } from "react";
import RCConfetti, { type Props as RCConfettiProps } from "react-confetti";
import { useWindowSize } from "react-use";

export const Confetti: FC<RCConfettiProps> = (props) => {
  const { width, height } = useWindowSize();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return <RCConfetti width={width} height={height} {...props} />;
};
