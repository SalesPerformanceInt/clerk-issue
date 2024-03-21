import { useCallback, useState } from "react";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigate, useSearchParams } from "@remix-run/react";

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
      language,
      questionItem,
      variant,
      id,
    });
  } catch (error) {
    throw simpleErrorResponse(error);
  }
};

export default function QuestionPage() {
  const { questionItem, variant, language } = useLoaderData<typeof loader>();
  const [score, setScore] = useState<number>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const courseId = searchParams.get("courseId");

  const onReload = () => {
    window.location.reload();
  };

  const onSubmit: OnSubmit = useCallback((selection) => {
    setTimeout(() => setScore(selection.correct ? 25 : 10), 1000);
  }, []);

  const onClose = courseId
    ? () => navigate(`/content/${language}/course/${courseId}`)
    : onReload;

  return (
    <Question
      closeLable={courseId ? "Course" : undefined}
      key={questionItem.uid}
      onSubmit={onSubmit}
      variant={variant}
      onContinue={onReload}
      onClose={onClose}
      questionItem={questionItem}
      score={score}
      totalScore={100}
    />
  );
}
