import React, { type FC } from "react";

import {
  faArrowDown,
  faArrowUp,
  faDash,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MatchedMap } from "~qcs/utils/matchedMap";
import { twMerge } from "tailwind-merge";

type LeaderboardEntryProps = {
  direction?: "up" | "down" | "neutral";
  rank: number | string;
  title: string;
  score?: number;
  className?: string;
  featured?: boolean;
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
  className,
  featured,
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-wrap items-start gap-2 text-text",
        featured && "bg-primary-25 font-bold",
        className,
      )}
    >
      {direction && (
        <FontAwesomeIcon
          icon={directionMap.get(direction)}
          className="basis-6"
        />
      )}

      <div
        className={twMerge("basis-8", [
          !!direction && "mr-2 text-right",
          featured === undefined && "font-bold",
        ])}
      >
        #{rank}
      </div>

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
