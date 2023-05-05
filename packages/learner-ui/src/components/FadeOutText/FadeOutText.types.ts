import type { DataCslp } from "~/utils/liveEdit";

export type FadeOutTextProps = {
  text?: string | null;
  hidden: boolean;
  className?: string;
  $?: {
    text?: DataCslp;
  };
};
