import React, { type FC, type ReactNode } from "react";

import { faArrowUp } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

type LeaderboardEntryProps = {
  direction: "up" | "down" | "neutral";
  rank: number | string;
  title: string;
  className?: string;
};

const LeaderboardEntry: FC<LeaderboardEntryProps> = ({
  direction,
  rank,
  title,
  className,
}) => {
  return (
    <div className="flex items-center text-text">
      <FontAwesomeIcon icon={faArrowUp} />

      <div className="font-bold"> #{rank} </div>

      <h3> {title} </h3>
    </div>
  );
};

export { LeaderboardEntry, type LeaderboardEntryProps };
