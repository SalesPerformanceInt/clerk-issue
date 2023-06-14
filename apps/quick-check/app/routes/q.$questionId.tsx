import { json, type ActionFunction, type LoaderArgs } from "@remix-run/node";
import { useLoaderData, useNavigate, useSubmit } from "@remix-run/react";

import {
  Question,
  variants,
  type OnSubmit,
  type QuestionItemVariant,
} from "accelerate-learner-ui";
import { compact, first, map, pipe } from "remeda";
import invariant from "tiny-invariant";
import { contentStack } from "~/contentstack.server";
import { getUserFromSession, requireUserSession } from "~/session.server";

import { saveAnswer, type Answer } from "~/models/answer";
import { generateNextQuestion } from "~/models/user";

const getVariantNames = (questionItemVariants: QuestionItemVariant[]) =>
  pipe(
    questionItemVariants,
    map((variant) => variants.find((_variant) => _variant in variant)),
    compact,
  );

const getFirstVariant = (questionItemVariants: QuestionItemVariant[]) =>
  pipe(questionItemVariants, getVariantNames, first());

export const loader = async ({ params, request }: LoaderArgs) => {
  await requireUserSession(request);
  const user = await getUserFromSession(request);

  invariant(params.questionId, "questionId not found");

  const questionItem = await contentStack.getQuestionItem(params.questionId);
  if (!questionItem) {
    throw new Response("Not Found", { status: 404 });
  }

  const variant = getFirstVariant(questionItem.variants);

  if (!variant) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({ questionItem, user, variant });
};

export const action: ActionFunction = async ({ request }) => {
  const result = await saveAnswer(request);
  const userId = await requireUserSession(request);
  const nextQuestionId = await generateNextQuestion(userId);

  return json({ result, nextQuestionId });
};

export default function Page() {
  const { questionItem, variant } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  const submit = useSubmit();
  const onSubmit: OnSubmit = (selection) => {
    const answer: Answer = {
      questionId: questionItem.uid,
      correct: selection.correct,
      uid: selection.value,
      variant,
    };
    const data = JSON.stringify(answer);
    submit({ data }, { method: "POST" });
  };

  return (
    <Question
      key={questionItem.uid}
      onContinue={() => navigate("/nq")}
      onSubmit={onSubmit}
      variant={variant}
      onClose={() => navigate("/")}
      questionItem={questionItem}
    />
  );
}

// export { ErrorBoundary } from "~/components/ErrorBoundary";
