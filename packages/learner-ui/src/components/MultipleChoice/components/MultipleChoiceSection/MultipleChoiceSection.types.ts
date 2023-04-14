import type { DataCslp } from "~/utils/liveEdit";

export type MultipleChoiceSectionProps = {
  text: string;
  hidden: boolean;
  className?: string;
  $?: {
    text?: DataCslp;
  };
};
