import type { DataCslp } from "~/utils/liveEdit";

export type HeaderProps = {
  currentTopic: string;
  onClose: () => void;
  $?: { currentTopic?: DataCslp };
};
