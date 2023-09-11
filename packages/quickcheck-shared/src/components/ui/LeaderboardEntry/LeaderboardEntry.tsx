import React, { type FC, type ReactNode } from "react";

import {
  faArrowDown,
  faArrowUp,
  faDash,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MatchedMap } from "~/utils/matchedMap";

type LeaderboardEntryProps = {
  direction?: "up" | "down" | "neutral";
  rank: number | string;
  title: string;
  score?: number;
  className?: string;
};

const directionMap = new MatchedMap([
  ["up", faArrowUp],
  ["down", faArrowDown],
  ["neutral", faDash],
  ["_", faDash],
]);

const LeaderboardEntry: FC<LeaderboardEntryProps> = ({
  direction,
  rank,
  title,
  score,
}) => {
  return (
    <div className="flex flex-wrap items-center text-text gap-4">
      {direction && (
        <FontAwesomeIcon
          icon={directionMap.get(direction)}
          className="basis-6"
        />
      )}

      <div className="font-bold text-right basis-8 mr-2"> #{rank} </div>

      <h3 className="flex-[6]"> {title} </h3>

      {score && (
        <span className="text-right">
          {new Intl.NumberFormat("en-US").format(score)}
        </span>
      )}
    </div>
  );
};

export { LeaderboardEntry, type LeaderboardEntryProps };
