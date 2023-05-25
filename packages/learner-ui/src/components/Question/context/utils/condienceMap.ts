import { MatchedMap } from "~/utils/matchedMap";

import type { Confidence } from "../../Question.types";

export const confidenceMap = new MatchedMap<Confidence, number>([
  ["high", 1000],
  ["medium", 200],
  ["_", 50],
]);
