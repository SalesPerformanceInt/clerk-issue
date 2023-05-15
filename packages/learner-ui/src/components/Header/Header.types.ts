import type { DataCSLP } from "~/contentstack";

export type HeaderProps = {
  currentTopic: string;
  onClose: () => void;
  currentTopicLiveEdit?: DataCSLP;
};
