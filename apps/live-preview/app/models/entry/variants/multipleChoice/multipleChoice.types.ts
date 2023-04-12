import type { DataCslp, Metadata } from "~/utils/server";

/**
 * Multiple Choice Typings
 */

export type Choice = {
  choice: {
    correct: boolean;
    _metadata: Metadata;
    points: number;
    body: string;
    feedback: string;
    $: {
      correct: DataCslp;
      points: DataCslp;
      body: DataCslp;
      feedback: DataCslp;
    };
  };
};

export type MCQuestion = {
  mcquestion: {
    prompt: string;
    _metadata: Metadata;
    stem: string;
    instruction: string;
    choices: Choice[];
    $: {
      prompt: DataCslp;
      stem: DataCslp;
      instruction: DataCslp;
    };
  };
};
