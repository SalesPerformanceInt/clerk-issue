import type { DateTime } from "luxon";

export interface Day {
  date: DateTime;
  activity: boolean;
}

export interface Week {
  days: Day[];
  activity: boolean;
}
