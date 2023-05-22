import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";

import {
  Question,
  variants,
  type QuestionItemVariant,
} from "accelerate-learner-ui";
import { compact, first, map, pipe } from "remeda";
import invariant from "tiny-invariant";
import { contentStack } from "~/contentstack.server";
import { getUserFromSession, requireUserSession } from "~/session.server";

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

export default function Page() {
  const { questionItem, variant } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  const totalScore = 1200;
  const topicPercentage = 77;

  return (
    <Question
      variant={variant}
      onClose={() => navigate("/")}
      questionItem={questionItem}
      topicPercentage={topicPercentage}
      totalScore={totalScore}
    />
  );
}

// export { ErrorBoundary } from "~/components/ErrorBoundary";
