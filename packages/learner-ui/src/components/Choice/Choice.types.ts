
import type { Expand } from "~/utils/expand";
import type { DataCslp } from "~/utils/liveEdit";

export type ChoiceData = {
  body?: string | null;
  correct?: boolean | null;
  feedback?: string | null;
  $?: {
    body?: DataCslp;
    feedback?: DataCslp;
  };
};

export type ChoiceItem = {
  choice?: ChoiceData | null;
};

export type ChoiceProps = Expand<
  {
    selected?: boolean;
    disabled?: boolean;
    onClick: () => void;
  } & Pick<ChoiceItem, "choice">
>;
