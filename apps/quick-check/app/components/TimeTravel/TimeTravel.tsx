import React, { useCallback, useState, type FC } from "react";

import { useLocation } from "@remix-run/react";

import { faGear } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

import { MatchedMap } from "quickcheck-shared";

import { TimeTravelModal } from "./TimeTravelModal";

/**
 * TimeTravel Styles
 */

const timeTravelStyles = new MatchedMap<string, string>([
  ["/admin", "hidden"],
  ["/", "sm:top-16"],
  ["_", ""],
]);

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

  const toggleModal = useCallback(() => setShowModal((prev) => !prev), []);

  const disabledPaths = ["/admin", "/login"];
  const isTimeTravelDisabled = disabledPaths.includes(location.pathname);

  if (isTimeTravelDisabled) return null;

  return (
    <>
      <div
        className={twMerge(
          "absolute top-8 sm:top-12 left-0 right-0 flex justify-center z-20",
          timeTravelStyles.get(location.pathname),
        )}
      >
        <button
          className="bg-primary-75 rounded-full px-2 py-1 shadow-md text-background text-xl"
          onClick={toggleModal}
        >
          <FontAwesomeIcon icon={faGear} />
        </button>
      </div>

      {showModal && <TimeTravelModal now={now} closeModal={toggleModal} />}
    </>
  );
};
