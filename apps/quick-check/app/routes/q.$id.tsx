import {
  json,
  redirect,
  type ActionFunction,
  type LoaderArgs,
} from "@remix-run/node";
import {
  useLoaderData,
  useNavigate,
  useSearchParams,
  useSubmit,
  type ShouldRevalidateFunction,
} from "@remix-run/react";

import { compact, first, map, pipe } from "remeda";
import invariant from "tiny-invariant";

import {
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

import { TimeTravelButton } from "~/components/TimeTravel";

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

    return json({
      questionItem,
      enrollmentTaxonomy,
      variant,
      id,
      userData,
      now,
    });
  } catch (error) {
    throw redirect("/nq");
  }
};

export const shouldRevalidate: ShouldRevalidateFunction = ({ actionResult }) =>
  !actionResult;

export const action: ActionFunction = async ({ request }) => {
  const result = await saveAnswer(request);

  const nextQuestionId = await generateNextQuestionFromRequest(request);

  return json({ result, nextQuestionId });
};

export default function Page() {
  const { questionItem, variant, enrollmentTaxonomy, id, userData, now } =
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
      now,
    };

    const data = JSON.stringify(answer);

    submit({ data }, { method: "POST" });
  };

  const [searchParams] = useSearchParams();
  const initialChoiceId = searchParams.get("c");

  return (
    <>
      <TimeTravelButton />

      <Question
        key={questionItem.uid}
        onContinue={() => navigate("/nq")}
        onSubmit={onSubmit}
        variant={variant}
        onClose={() => navigate("/")}
        questionItem={questionItem}
        enrollmentTaxonomy={enrollmentTaxonomy}
        initialChoiceId={initialChoiceId}
        userData={userData}
      />
    </>
  );
}
