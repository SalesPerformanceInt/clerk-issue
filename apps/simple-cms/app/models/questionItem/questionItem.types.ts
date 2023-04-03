import type { MultipleChoice } from "./variants/multipleChoice/multipleChoice.types";
import type { TrueOrFalse } from "./variants/trueOrFalse/trueOrFalse.types";

/**
 * Shared Types
 */

export type System = {
  branch: string;
  content_type_uid: string;
  created_at: string;
  created_by: string;
  locale: string;
  tags: string[];
  uid: string;
  updated_at: string;
  updated_by: string;
  version: number;
};

/**
 * Singular Types
 */

export type QuestionItem = {
  title: string;
  system: System;
  variants: [MultipleChoice | TrueOrFalse];
};

/**
 * Multiple Types
 */

export type AllQuestionItems = {
  items: QuestionItem[];
  total: number;
};

export type QueryAllQuestionItems = {
  all_questionitem: AllQuestionItems;
};
