import type { DataCSLP } from "~/contentstack";

export type FadeOutTextProps = {
  text?: string | null;
  hidden: boolean;
  className?: string;
  liveEdit?: DataCSLP;
};
