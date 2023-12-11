import { useMemo } from "react";

import { DateTime } from "luxon";
import objectHash from "object-hash";
import { sortBy } from "remeda";

import { MCQuestion } from "~/contentstack";

export const deterministicallyRandomizeChoices = (
  choices: MCQuestion["mcquestion"]["choices"],
  date: string = DateTime.now().toISODate(),
) => sortBy(choices, ({ choice }) => objectHash({ date, ...choice }));

export const useDeterministicallyRandomizeChoices = (
  choices: MCQuestion["mcquestion"]["choices"],
  date: string = DateTime.now().toISODate(),
) =>
  useMemo(
    () => sortBy(choices, ({ choice }) => objectHash({ date, ...choice })),
    [date, choices],
  );
