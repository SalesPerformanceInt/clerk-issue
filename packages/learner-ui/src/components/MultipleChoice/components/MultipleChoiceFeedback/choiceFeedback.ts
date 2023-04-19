import { MatchedMap } from "~/utils/matchedMap";

export const choiceFeedback = new MatchedMap([
  [
    true,
    {
      feedbackText: "Correct",
      icon: "/green-check-medalion.svg",
      color: "text-lime-700",
    },
  ],
  [
    false,
    {
      feedbackText: "Incorrect",
      icon: "/red-circle-x.svg",
      color: "text-orange-700",
    },
  ],
]);
