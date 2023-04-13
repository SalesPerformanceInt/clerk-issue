import type { DataCslp, Metadata } from "~/utils/server";

/**
 * True or False Typings
 */

export type TFQuestion = {
  tfquestion: {
    prompt: string;
    _metadata: Metadata;
    stem: string;
    instruction: string;
    correct: boolean;
    points: number;
    feedback: string;
    incorrect_feedback: string;
    $: {
      prompt: DataCslp;
      stem: DataCslp;
      instruction: DataCslp;
      correct: DataCslp;
      points: DataCslp;
      feedback: DataCslp;
      incorrect_feedback: DataCslp;
    };
  };
};
