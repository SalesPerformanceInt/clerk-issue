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
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 w-full">
      <div
        className="fixed bottom-0 left-0 right-0 top-0 w-full bg-black opacity-50"
        onClick={closeModal}
      />

      <div className="fixed left-0 right-0 top-1/2 mx-auto flex w-full max-w-screen-sm -translate-y-1/2 items-center justify-center rounded bg-primary shadow-card">
        <div className="flex w-full items-start justify-between p-8">
          <div className="flex w-full flex-col justify-start gap-12 font-medium text-white">
            <h2 className="pb-4 text-3xl">Time Travel</h2>

            <div className="flex items-center gap-2 text-xl">
              <label htmlFor="currentDate">Current Date:</label>

              <input
                type="date"
                name="currentDate"
                className="ml-1 px-2 py-1 text-black"
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
            className="p-1 text-2xl font-bold text-background"
            onClick={closeModal}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </div>
  );
};
