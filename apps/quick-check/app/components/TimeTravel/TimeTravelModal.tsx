import React, { useCallback, useState, type FC } from "react";

import { useFetcher } from "@remix-run/react";

import { faXmark } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";

import { Button } from "quickcheck-shared";

/**
 * TimeTravel Modal
 */

type TimeTravelModalProps = {
  now: string;
  closeModal: () => void;
};

export const TimeTravelModal: FC<TimeTravelModalProps> = ({
  now,
  closeModal,
}) => {
  const fetcher = useFetcher();

  const [localNow, setLocalNow] = useState(now);

  const changeDate = useCallback((date: string) => {
    const dateObj = DateTime.fromISO(date);
    const [month, day, year] = [
      dateObj.get("month"),
      dateObj.get("day"),
      dateObj.get("year"),
    ];
    const now = DateTime.now().set({ month, day, year }).toISO()!;

    setLocalNow(now);

    fetcher.submit(
      { now },
      {
        method: "post",
        action: `/updateNow?redirectTo=${location.pathname}`,
      },
    );
  }, []);

  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 w-full z-50">
      <div
        className="fixed right-0 left-0 top-0 bottom-0 w-full bg-black opacity-50"
        onClick={closeModal}
      />

      <div className="fixed left-0 right-0 w-full max-w-screen-sm mx-auto top-1/2 -translate-y-1/2 flex items-center justify-center bg-primary rounded shadow-card">
        <div className="flex items-start justify-between w-full p-8">
          <div className="flex flex-col justify-start gap-12 text-white font-medium w-full">
            <h2 className="text-3xl pb-4">Time Travel</h2>

            <div className="flex items-center gap-2 text-xl">
              <label htmlFor="currentDate">Current Date:</label>

              <input
                type="date"
                name="currentDate"
                className="text-black px-2 py-1 ml-1"
                value={DateTime.fromISO(localNow).toISODate()!}
                onChange={(e) => changeDate(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 text-xl">
              <Button onClick={() => changeDate(new Date().toISOString())}>
                Reset Date to Today
              </Button>
            </div>
          </div>

          <button
            className="p-1 text-background font-bold text-2xl"
            onClick={closeModal}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </div>
  );
};
