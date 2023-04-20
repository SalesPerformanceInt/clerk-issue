import type { ChoiceData, MCQuestion } from "accelerate-learner-ui";

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

export type MCQuestionVariant = {
  __typename?: string;
  mcquestion: MCQuestion;
  selected: ChoiceData | null;
};
