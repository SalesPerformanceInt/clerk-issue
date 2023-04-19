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

export type QuestionItemSelected = {
  correct: boolean;
} | null;

export type QuestionItemVariant = {
  selected: QuestionItemSelected;
  showConfidence: boolean;
  onVariantSelect: (selected: QuestionItemSelected) => void;
  onGoBackClick: () => void;
} & EntryLivePreviewVariant;

export type QuestionItemVariantList = {
  variantId: string | number;
  variantData: EntryLivePreviewVariant;
  VariantComponent: (props: QuestionItemVariant) => JSX.Element;
};
