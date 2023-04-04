/**
 * Singular Types
 */

export type TrueOrFalse = {
  tfquestion: {
    prompt: string;
    stem: string;
    instruction: string;
    correct: boolean;
    points: number;
    feedback: string | null;
    incorrect_feedback: string | null;
  };
};
