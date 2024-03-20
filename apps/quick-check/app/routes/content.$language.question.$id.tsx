import { useCallback, useState } from "react";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getContentStackClient } from "~/contentstack.server";

import {
  invariant,
  Question,
  simpleErrorResponse,
  type OnSubmit,
} from "quickcheck-shared";

import { getFirstVariant } from "~/models/question";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  try {
    const { id, language } = params;
    invariant(id, "ID not found");
    invariant(language, "Language not found");

    const contentStack = getContentStackClient(language);
    const questionItem = await contentStack.getQuestionItem(id);

    invariant(questionItem, "questionItem not found");

    const variant = getFirstVariant(questionItem.variants);
    invariant(variant, "No valid variant");

    return json({
      questionItem,
      variant,
      id,
    });
  } catch (error) {
    throw simpleErrorResponse(error);
  }
};

export default function QuestionPage() {
  const { questionItem, variant } = useLoaderData<typeof loader>();
  const [score, setScore] = useState<number>();

  const onClose = () => {
    window.location.reload();
  };

  const onSubmit: OnSubmit = useCallback((selection) => {
    setTimeout(() => setScore(selection.correct ? 25 : 10), 1000);
  }, []);

  return (
    <Question
      key={questionItem.uid}
      onSubmit={onSubmit}
      variant={variant}
      onContinue={onClose}
      onClose={onClose}
      questionItem={questionItem}
      score={score}
      totalScore={100}
    />
  );
}
