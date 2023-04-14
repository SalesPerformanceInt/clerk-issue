export type ChoiceData = {
  body?: string | null;
  correct?: boolean | null;
};

export type ChoiceProps = {
  choice?: ChoiceData | null;
  selected?: boolean;
  disabled?: boolean;
  onClick: () => void;
};
