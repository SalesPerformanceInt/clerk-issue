import React, { FC, useMemo } from "react";

import { sample } from "lodash";

import { useQuestionContext } from "~/components/Question";

const quotes = [
  `Almost everything will work again if you unplug it for a few minutes...including you.
  
  -- Anne Lamott`,
  `Sometimes when we take a break we may find that solutions then present themselves.
  
  -- Catherine Pulsifer`,
  `There is virtue in work and there is virtue in rest. Use both and overlook neither.

  -- Alan Cohen`,
  `Research shows that taking purposeful breaks (anywhere from 5–60 minutes) from studying to refresh your brain and body increases your energy, productivity, and ability to focus.

  -- Cornell Univ. Health`,
];

export const BreakBackground: FC = () => {
  const { onBreak, bodyHeight } = useQuestionContext();

  const quote = useMemo(() => sample(quotes), []);

  if (!onBreak) return null;
  return (
    <>
      <div className="flex flex-grow" />
      <div
        className={`absolute left-0 right-0 top-0 flex flex-col justify-between px-16 py-8 md:px-20`}
        style={{ bottom: bodyHeight }}
      >
        <div />
        <div>
          <h1 className="whitespace-pre-line text-2xl text-white">{quote}</h1>
        </div>
        <div>
          <p className="text-sm font-extralight text-white">
            You will receive another notification to jump back in tomorrow at
            8am
          </p>
        </div>
      </div>
    </>
  );
};
