import type { Expand } from "~/utils/expand";
import type { DataCslp } from "~/utils/liveEdit";

type ChoiceData = {
  body: string;
  correct: boolean;
  feedback?: string;
  $?: {
    body?: DataCslp;
    feedback?: DataCslp;
  };
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
