import type {
  ChoiceData,
  ChoiceItem,
  OnChoiceSelect,
} from "accelerate-learner-ui";

import type {
  EntryLivePreviewData,
  EntryLivePreviewVariant,
} from "~/models/entry";

/**
 * QuestionItem Typings
 */

export type { QuestionItemData } from "~/models/entry/questionItem";

export type QuestionItemProps = {
  entryData: EntryLivePreviewData;
};

export type QuestionItemChoice = ChoiceItem;
export type QuestionItemSelected = ChoiceData | null | undefined;

export type QuestionItemVariant = {
  selected: QuestionItemSelected;
  showConfidence: boolean;
  onVariantSelect: OnChoiceSelect;
  onGoBackClick: () => void;
} & EntryLivePreviewVariant;

export type QuestionItemVariantList = {
  variantId: string | number;
  variantData: EntryLivePreviewVariant;
  VariantComponent: (props: QuestionItemVariant) => JSX.Element;
};
