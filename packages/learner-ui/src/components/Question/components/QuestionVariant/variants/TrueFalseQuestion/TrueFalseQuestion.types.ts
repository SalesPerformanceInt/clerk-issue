import { TFQuestion } from "~/contentstack";

export type OnTFChoiceSelect = (choice: boolean) => void;

export type TrueFalseQuestionProps = {
  tfquestion: TFQuestion["tfquestion"];
  currentTopic: string;
  totalScore: number;
  topicPercentage: number;
  offset?: number;
};
