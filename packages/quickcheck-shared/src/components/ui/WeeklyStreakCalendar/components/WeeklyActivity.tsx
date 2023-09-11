import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { CalendarStatus, type Week } from "~/components";

type WeeklyActivityProps = {
  calendar: Week[];
};

const WeeklyActivity: FC<WeeklyActivityProps> = ({ calendar }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center ml-2">
      <p className="text-center font-semibold text-xs leading-4 uppercase text-text">
        {t("common.weekly")}
      </p>
      <div className="flex flex-col items-center relative">
        <div className="flex flex-col absolute left-0 top-1.25 right-0 bottom-0 items-center">
          <div className="w-0.5 h-0.5 bg-primary-25" />
          <div className="w-0.5 h-0.5 bg-primary-25 mt-0.5" />
          <div className="w-0.5 h-full bg-primary-25 mt-0.5" />
        </div>
        {calendar.map(({ activity, days }) => (
          <CalendarStatus
            key={days[0]?.date.toISODate()}
            activity={activity}
            className="mt-4"
          />
        ))}
      </div>
    </div>
  );
};

export { WeeklyActivity };
