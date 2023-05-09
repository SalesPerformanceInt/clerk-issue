import { WithLiveData } from "./utilities";

export type Metadata = {
  uid: string;
};

/**
 * Multiple Choice
 */

export type QuestionItemChoice = WithLiveData<{
  choice: {
    correct: boolean;
    _metadata: Metadata;
    points?: number;
    body: string;
    feedback: string;
  };
}>;

export type MCQuestion = WithLiveData<{
  mcquestion: {
    prompt?: string;
    _metadata: Metadata;
    stem: string;
    instruction: string;
    choices: QuestionItemChoice[];
  };
}>;

/**
 * True Or False
 */

export type TFQuestion = WithLiveData<{
  tfquestion: {
    prompt?: string;
    _metadata: Metadata;
    stem: string;
    instruction: string;
    truthy_label: string;
    falsey_label: string;
    correct: boolean;
    points: number;
    feedback: string;
    incorrect_feedback: string;
  };
}>;

/**
 * Fill Blanks
 */

export type FillBlanksQuestionWord = WithLiveData<{
  draggable_word: {
    _metadata: Metadata;
    word: string;
    order: number;
  };
}>;

export type FillBlanksQuestion = WithLiveData<{
  fillblanksquestion: {
    prompt?: string;
    _metadata: Metadata;
    instruction: string;
    stem: string;
    draggable_words: FillBlanksQuestionWord[];
    feedback: string;
    incorrect_feedback: string;
  };
}>;

/**
 * Reorder List
 */

export type ReorderListQuestionItem = WithLiveData<{
  item: {
    _metadata: Metadata;
    text: string;
    order: number;
  };
}>;

export type ReorderListQuestion = WithLiveData<{
  reorderlistquestion: {
    prompt?: string;
    _metadata: Metadata;
    stem: string;
    instruction: string;
    feedback: string;
    incorrect_feedback: string;
    list: ReorderListQuestionItem[];
  };
}>;

/**
 * Question Item
 */

export type QuestionItemVariant =
  | MCQuestion
  | TFQuestion
  | FillBlanksQuestion
  | ReorderListQuestion;

export type QuestionItem = WithLiveData<{
  title: string;
  uid: string;
  locale: string;
  variants: QuestionItemVariant[];
}>;

export type Taxon = WithLiveData<{
  title: string;
  uid: string;
  locale: string;
}>;

export type ContentType = QuestionItem | Taxon;
