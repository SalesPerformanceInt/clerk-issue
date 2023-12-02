import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { CalendarStatus, type Week } from "~/components";

type WeeklyActivityProps = {
  calendar: Week[];
};

const WeeklyActivity: FC<WeeklyActivityProps> = ({ calendar }) => {
  const { t } = useTranslation();

  return (
    <div className="ml-2 flex flex-col items-center">
      <p className="text-center text-xs font-semibold uppercase leading-4 text-text">
        {t("common.weekly")}
      </p>
      <div className="relative flex flex-col items-center">
        <div className="absolute bottom-0 left-0 right-0 top-1.25 flex flex-col items-center">
          <div className="h-0.5 w-0.5 bg-primary-25" />
          <div className="mt-0.5 h-0.5 w-0.5 bg-primary-25" />
          <div className="mt-0.5 h-full w-0.5 bg-primary-25" />
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
