import {
  json,
  redirect,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import {
  PrefetchPageLinks,
  useActionData,
  useLoaderData,
  useNavigate,
  useSearchParams,
  useSubmit,
  type ShouldRevalidateFunction,
} from "@remix-run/react";

import { compact, first, map, pipe } from "remeda";

import {
  invariant,
  Question,
  variants,
  type OnSubmit,
  type QuestionItemVariant,
} from "quickcheck-shared";

import { getUserApolloClientFromRequest } from "~/graphql";

import { saveAnswer, type Answer } from "~/models/answer";
import { getQuestionData } from "~/models/question";
import { requireUserSession } from "~/models/session";
import { generateNextQuestionFromRequest } from "~/models/user";

const getVariantNames = (questionItemVariants: QuestionItemVariant[]) =>
  pipe(
    questionItemVariants,
    map((variant) => variants.find((_variant) => _variant in variant)),
    compact,
  );

const getFirstVariant = (questionItemVariants: QuestionItemVariant[]) =>
  pipe(questionItemVariants, getVariantNames, first());

export const config = {
  maxDuration: 300,
};

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  try {
    const { id } = params;
    invariant(id, "ID not found");

    const [now] = await requireUserSession(request);

    const userApolloClient = await getUserApolloClientFromRequest(request);
    const userQuestion = await userApolloClient.getActiveUserQuestion(id);
    const userData = await userApolloClient.getUserActiveQuestionsData();

    invariant(userQuestion, "user question not found");

    const { questionItem, enrollmentTaxonomy } =
      await getQuestionData(userQuestion);

    const variant = getFirstVariant(questionItem.variants);
    invariant(variant, "No valid variant");

    await userApolloClient.createEvent({
      type: "QuestionViewed",
      data: {
        enrollment_id: userQuestion.user_enrollment.id,
        question_id: userQuestion.id,
        taxonomy_id: userQuestion.user_enrollment.taxonomy_id,
        variant,
      },
    });

    return json({
      questionItem,
      enrollmentTaxonomy,
      variant,
      id,
      userData,
      now,
    });
  } catch (error) {
    throw redirect("/");
  }
};

export const shouldRevalidate: ShouldRevalidateFunction = ({
  actionResult,
}) => {
  const hasSubmittedAnswer = !!actionResult;

  return !hasSubmittedAnswer;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const { currentAnswer, reviewedAnswer, totalScore } =
    await saveAnswer(request);

  const nextQuestionId = await generateNextQuestionFromRequest(
    request,
    currentAnswer.userQuestionId,
  );

  return json({ nextQuestionId, reviewedAnswer, totalScore });
};

export default function QuestionPage() {
  const { questionItem, variant, enrollmentTaxonomy, id, userData, now } =
    useLoaderData<typeof loader>();

  const actionData = useActionData<typeof action>();

  const navigate = useNavigate();
  const submit = useSubmit();

  const onSubmit: OnSubmit = (selection) => {
    const answer: Answer = {
      userQuestionId: id,
      questionId: questionItem.uid,
      correct: selection.correct,
      uid: selection.value,
      variant,
      now,
    };

    const data = JSON.stringify(answer);

    submit({ data }, { method: "POST" });
  };

  const [searchParams] = useSearchParams();
  const initialChoiceId = searchParams.get("c");

  return (
    <>
      <Question
        key={questionItem.uid}
        onContinue={() => navigate(`/question/${actionData?.nextQuestionId}`)}
        onSubmit={onSubmit}
        variant={variant}
        onClose={() => navigate("/")}
        questionItem={questionItem}
        enrollmentTaxonomy={enrollmentTaxonomy}
        initialChoiceId={initialChoiceId}
        userData={userData}
        score={actionData?.reviewedAnswer?.score}
        totalScore={actionData?.totalScore}
      />

      {/* {actionData && actionData.nextQuestionId && (
        <PrefetchPageLinks page={`/question/${actionData.nextQuestionId}`} />
      )} */}
    </>
  );
}
