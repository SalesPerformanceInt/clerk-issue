import React, { useCallback, useState, type FC } from "react";

import { useLocation } from "@remix-run/react";

import { faGear } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";

import { TimeTravelModal } from "./TimeTravelModal";

/**
 * TimeTravel
 */

export type TimeTravelContext = {
  now: string;
};

type TimeTravelProps = {
  now: string;
  className?: string;
};

export const TimeTravel: FC<TimeTravelProps> = ({ now, className }) => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const hiddenPaths = new Set(["/admin", "/login"]);
  const isTimeTravelHidden = hiddenPaths.has(location.pathname);

  const enabledPaths = new Set(["/dashboard"]);
  const isTimeTravelEnabled = enabledPaths.has(location.pathname);

  const toggleModal = useCallback(
    () => isTimeTravelEnabled && setShowModal((prev) => !prev),
    [isTimeTravelEnabled],
  );

  if (isTimeTravelHidden) return null;

  return (
    <>
      <div className="absolute top-8 sm:top-12 left-0 right-0 flex justify-center z-20">
        <button
          className="bg-primary-75 rounded px-2 py-1 shadow-md text-background text-xl flex items-center gap-2"
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
