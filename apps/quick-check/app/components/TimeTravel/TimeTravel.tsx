import React, { useCallback, useState, type FC } from "react";

import { faGear } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

import { TimeTravelModal } from "./TimeTravelModal";

/**
 * TimeTravel
 */

type TimeTravelProps = {
  now: string;
  className?: string;
};

export const TimeTravel: FC<TimeTravelProps> = ({ now, className }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => setShowModal((prev) => !prev), []);

  return (
    <>
      <div
        className={twMerge(
          "absolute top-8 sm:top-12 left-0 right-0 flex justify-center z-20",
          className,
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
