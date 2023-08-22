import {
  json,
  redirect,
  type ActionFunction,
  type LoaderArgs,
} from "@remix-run/node";
import {
  useLoaderData,
  useNavigate,
  useSubmit,
  type ShouldRevalidateFunction,
} from "@remix-run/react";

import { compact, first, map, pipe } from "remeda";
import invariant from "tiny-invariant";
import { contentStack } from "~/contentstack.server";
import { getUserApolloClientFromRequest } from "~/graphql";
import { requireUserSession } from "~/session.server";

import {
  Question,
  variants,
  type OnSubmit,
  type QuestionItemVariant,
} from "quickcheck-shared";

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
  try {
    await requireUserSession(request);

    const { id } = params;

    invariant(id, "ID not found");

    const userApolloClient = await getUserApolloClientFromRequest(request);
    const userQuestion = await userApolloClient.getUserQuestion(id);

    invariant(userQuestion?.active_on, "user question not found");

    const questionItem = await contentStack.getQuestionItem(
      userQuestion.question_id,
    );

    invariant(questionItem, "questionItem not found");

    const enrollmentTaxonomy = await contentStack.getTaxonomy(
      userQuestion.user_enrollment.taxonomy_id,
    );

    const variant = getFirstVariant(questionItem.variants);
    invariant(variant, "No valid ");

    return json({ questionItem, enrollmentTaxonomy, variant, id });
  } catch (error) {
    throw redirect("/nq");
  }
};

export const shouldRevalidate: ShouldRevalidateFunction = ({
  currentParams,
  nextParams,
}) => {
  if (currentParams.id !== nextParams.id) return true;
  return false;
};

export const action: ActionFunction = async ({ request }) => {
  const result = await saveAnswer(request);
  const nextQuestionId = await generateNextQuestion(request);

  return json({ result, nextQuestionId });
};

export default function Page() {
  const { questionItem, variant, enrollmentTaxonomy, id } =
    useLoaderData<typeof loader>();
  const navigate = useNavigate();

  const submit = useSubmit();
  const onSubmit: OnSubmit = (selection) => {
    const answer: Answer = {
      id,
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
      enrollmentTaxonomy={enrollmentTaxonomy}
    />
  );
}

// export { ErrorBoundary } from "~/components/ErrorBoundary";
