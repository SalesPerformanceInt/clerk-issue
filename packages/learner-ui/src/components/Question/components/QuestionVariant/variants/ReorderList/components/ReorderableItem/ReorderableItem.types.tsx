import type { ReorderListQuestionItem } from "~/contentstack";

export type ReorderableItemProps = {
  text: string;
  id: string | number;
  disabled: boolean;
  liveEdit?: ReorderListQuestionItem["item"]["$"];
};
