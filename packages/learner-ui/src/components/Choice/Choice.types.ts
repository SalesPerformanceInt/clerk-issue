export type ChoiceData = {
  body?: string | null;
  correct?: boolean | null;
  feedback?: string | null;
};

export type ChoiceProps = {
  choice?: ChoiceData | null;
  selected?: boolean;
  disabled?: boolean;
  onClick: () => void;
};
