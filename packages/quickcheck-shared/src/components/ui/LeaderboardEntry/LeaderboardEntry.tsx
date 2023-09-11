import React, { type FC, type ReactNode } from "react";

import {
  faArrowDown,
  faArrowUp,
  faDash,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

import { MatchedMap } from "~/utils/matchedMap";

type LeaderboardEntryProps = {
  direction: "up" | "down" | "neutral";
  rank: number | string;
  title: string;
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
  className,
}) => {
  return (
    <div className="flex flex-wrap items-center text-text gap-4">
      <FontAwesomeIcon icon={directionMap.get(direction)} className="flex-1" />

      <div className="font-bold text-right flex-1 mr-2"> #{rank} </div>

      <h3 className="flex-[5]"> {title} </h3>
    </div>
  );
};

export { LeaderboardEntry, type LeaderboardEntryProps };
