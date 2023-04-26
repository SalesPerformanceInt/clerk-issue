import { WithLiveData } from "./utilities";

export type Metadata = {
  uid: string;
};

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

export type QuestionItemVariant = MCQuestion | TFQuestion;

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
