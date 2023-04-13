export type ChoiceData = {
  body: string;
  correct: boolean;
};

export type ChoiceProps = {
  choice: ChoiceData;
  selected?: boolean;
  disabled?: boolean;
  onClick: () => void;
};
