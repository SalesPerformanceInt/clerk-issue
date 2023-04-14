import type { DataCslp } from "~/utils/liveEdit";

export type MultipleChoiceSectionProps = {
  text: string;
  feedback: boolean;
  className?: string;
  $?: {
    text?: DataCslp;
  };
};
