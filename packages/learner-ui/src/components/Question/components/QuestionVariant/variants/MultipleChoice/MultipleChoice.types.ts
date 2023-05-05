import { MCQuestion, QuestionItemChoice } from "~/contentstack";

export type OnMCChoiceSelect = (choice: QuestionItemChoice) => void;

export type MultipleChoiceProps = {
  mcquestion: MCQuestion["mcquestion"];
  currentTopic: string;
  totalScore: number;
  topicPercentage: number;
};
