import type { DataCslp } from "~/utils/liveEdit";

export type MultipleChoiceSectionProps = {
  text?: string | null;
  hidden: boolean;
  className?: string;
  $?: {
    text?: DataCslp;
  };
};
