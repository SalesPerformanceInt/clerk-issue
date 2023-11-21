import React, { useCallback, useState, type FC } from "react";
import { useLocation } from "@remix-run/react";

import { faGear } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";
import { twMerge } from "tailwind-merge";

import { TimeTravelModal } from "./TimeTravelModal";

/**
 * TimeTravel
 */

export type TimeTravelContext = {
  now: string;
};

type TimeTravelProps = {
  now: string;
  flag: boolean;
};

export const TimeTravel: FC<TimeTravelProps> = ({ now, flag }) => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const hiddenPaths = ["/admin", "/login"];
  const isTimeTravelHidden = hiddenPaths.some((path) =>
    location.pathname.includes(path),
  );

  const enabledPaths = ["/dashboard"];
  const isTimeTravelEnabled = enabledPaths.some((path) =>
    location.pathname.includes(path),
  );

  const toggleModal = useCallback(
    () => isTimeTravelEnabled && setShowModal((prev) => !prev),
    [isTimeTravelEnabled],
  );

  // if (!flag) return null;
  if (isTimeTravelHidden) return null;

  return (
    <>
      <div className="absolute left-0 right-0 top-8 z-20 flex justify-center sm:top-12">
        <button
          className={twMerge(
            "flex items-center gap-2 rounded bg-primary-75 px-2 py-1 text-xl text-background shadow-md",
            !isTimeTravelEnabled && "cursor-default",
          )}
          onClick={toggleModal}
        >
          {isTimeTravelEnabled && (
            <FontAwesomeIcon icon={faGear} className="text-xl" />
          )}

          <span className="text-base">
            {DateTime.fromISO(now).toFormat("LLL dd yyyy")}
          </span>
        </button>
      </div>

      {showModal && <TimeTravelModal now={now} closeModal={toggleModal} />}
    </>
  );
};
