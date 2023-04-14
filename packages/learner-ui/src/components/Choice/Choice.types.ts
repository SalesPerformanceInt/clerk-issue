import type { Expand } from "~/utils/expand";

type ChoiceData = {
  body: string;
  correct: boolean;
};

export type ChoiceItem = {
  choice: ChoiceData;
};

export type ChoiceProps = Expand<
  {
    selected?: boolean;
    disabled?: boolean;
    onClick: () => void;
  } & Pick<ChoiceItem, "choice">
>;
