import { MCQuestion, QuestionItemChoice } from "~/contentstack";

export type MCSelected = QuestionItemChoice["choice"] | null;

export type OnChoiceSelect = (choice: QuestionItemChoice) => void;

export type OnGoBackClick = () => void;

export type MultipleChoiceProps = {
  mcquestion: MCQuestion["mcquestion"];
  onClose: () => void;
  currentTopic: string;
  totalScore: number;
  topicPercentage: number;
};
