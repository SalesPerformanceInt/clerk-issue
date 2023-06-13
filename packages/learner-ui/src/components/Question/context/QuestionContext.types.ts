import { ReactNode, RefObject } from "react";
import { useMeasure } from "react-use";

import type { Confidence, QuestionProps, Selection } from "../Question.types";

export interface QuestionContextProps extends QuestionProps {
  selected: Selection | null;
  hasSelected: boolean;
  isFeedbackActive: boolean;
  onGoBackClick: () => void;
  onSelection: <T>(selection: Selection<T>) => void;
  onBreak: boolean;
  goOnBreak: () => void;
  bodyRef: BodyRef;
  bodyHeight: number;
  currentTopic: string;
  showConfidence: boolean;
  onConfidenceClick: (confidence: Confidence) => void;
  onConfettiComplete: () => void;
  numberOfConfettiPieces: number | null;
  bottomRef: RefObject<HTMLDivElement>;
}

export interface QuestionContextProviderProps extends QuestionProps {
  children: ReactNode;
}

export type BodyRef = ReturnType<typeof useMeasure<HTMLDivElement>>[0];
