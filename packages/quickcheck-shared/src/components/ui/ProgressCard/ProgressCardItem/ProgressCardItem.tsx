import React, { type FC, type HTMLAttributes } from "react";

import {
  faChevronRight,
  faMedal,
  faShapes,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress, ProgressIndicator } from "@radix-ui/react-progress";

type ProgressCardItemProps = HTMLAttributes<HTMLDivElement>;

const ProgressCardItem: FC<ProgressCardItemProps> = () => {
  return (
    <div className="flex items-center justify-between p-6 gap-6 cursor-pointer border-b border-b-background-secondary last:border-b-0">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between text-text font-normal">
          <h5 className="whitespace-nowrap overflow-hidden text-ellipsis">
            Six Critical Skills
          </h5>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faShapes} size="xs" />

              <span> #1 </span>
            </div>

            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faMedal} size="xs" />

              <span> 1,234 </span>
            </div>
          </div>
        </div>

        <Progress className="relative overflow-hidden bg-primary-25 h-2 w-full rounded-full">
          <ProgressIndicator
            className="bg-primary w-full h-full absolute"
            style={{ transform: `translateX(-${100 - 50}%)` }}
          />

          <ProgressIndicator
            className="bg-success w-full h-full absolute"
            style={{ transform: `translateX(-${100 - 15}%)` }}
          />
        </Progress>

        <div className="flex items-center justify-between text-text font-semibold text-xs uppercase">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-success" />

              <span> 2 Retired </span>
            </div>

            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-primary" />

              <span> 8 Attempted </span>
            </div>
          </div>

          <span> 20 Total </span>
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
