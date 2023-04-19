import type { DataCslp, Metadata } from "~/utils/server";

export type { MCQuestion } from "accelerate-learner-ui";

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
