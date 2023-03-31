/**
 * Singular Types
 */

export type Choice = {
  body: string;
  correct: boolean;
  points: number;
  feedback: string | null;
};

export type MultipleChoice = {
  mcquestion: {
    prompt: string;
    stem: string;
    instruction: string;
    choices: Choice[];
  };
};
