import React, { type FC } from "react";

import {
  faChevronRight,
  faMedal,
  faShapes,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress, ProgressIndicator } from "@radix-ui/react-progress";

type ProgressCardItemProps = {
  title: string;
  ranking: string | number;
  score: string | number;
  progress: {
    attempted: number;
    retired: number;
    total: number;
  };
};

const ProgressCardItem: FC<ProgressCardItemProps> = ({
  title,
  ranking,
  score,
  progress,
}) => {
  const progressBarValues = {
    retired: (progress.retired / progress.total) * 100,
    attempted: (progress.attempted / progress.total) * 100,
  };

  return (
    <div className="flex items-center justify-between p-6 gap-6 cursor-pointer border-b border-b-background-secondary last:border-b-0">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between text-text font-normal">
          <h5 className="whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </h5>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faShapes} size="xs" />

              <span> {`#${ranking}`} </span>
            </div>

            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faMedal} size="xs" />

              <span> {score} </span>
            </div>
          </div>
        </div>

        <Progress className="relative overflow-hidden bg-primary-25 h-2 w-full rounded-full">
          <ProgressIndicator
            className="bg-primary w-full h-full absolute"
            style={{
              transform: `translateX(-${100 - progressBarValues.attempted}%)`,
            }}
          />

          <ProgressIndicator
            className="bg-success w-full h-full absolute"
            style={{
              transform: `translateX(-${100 - progressBarValues.retired}%)`,
            }}
          />
        </Progress>

        <div className="flex items-center justify-between text-text font-semibold text-xs uppercase">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-success" />

              <span> {`${progress.retired} Retired`} </span>
            </div>

            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-primary" />

              <span> {`${progress.attempted} Attempted`} </span>
            </div>
          </div>

          <span> {`${progress.total} Total`} </span>
        </div>
      </div>

      <div>
        <FontAwesomeIcon
          icon={faChevronRight}
          size="lg"
          className="text-primary-25"
        />
      </div>
    </div>
  );
};

export { ProgressCardItem, type ProgressCardItemProps };
