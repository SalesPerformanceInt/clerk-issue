import type { Expand } from "~/utils/expand";

export type ChooseAnotherAnswerProps = Expand<{
  show: boolean;
  onGoBackClick: () => void;
}>;
