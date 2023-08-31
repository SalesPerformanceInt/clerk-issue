import { useState } from "react";

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
import { getUserApolloClientFromRequest } from "~/graphql";
import { requireUserSession } from "~/session.server";

import {
  Question,
  variants,
  type OnSubmit,
  type QuestionItemVariant,
} from "quickcheck-shared";

import { saveAnswer, type Answer } from "~/models/answer";
import { getQuestionData } from "~/models/question";
import { generateNextQuestionFromRequest } from "~/models/user";

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

    const { questionItem, enrollmentTaxonomy } =
      await getQuestionData(userQuestion);

    const variant = getFirstVariant(questionItem.variants);
    invariant(variant, "No valid variant");

    return json({
      questionItem,
      userQuestion,
      enrollmentTaxonomy,
      variant,
      id,
      userId: userApolloClient.userId,
    });
  } catch (error) {
    throw redirect("/nq");
  }
};

export const shouldRevalidate: ShouldRevalidateFunction = ({
  currentParams,
  nextParams,
}) => currentParams.id !== nextParams.id;

export const action: ActionFunction = async ({ request }) => {
  const result = await saveAnswer(request);

  const nextQuestionId = await generateNextQuestionFromRequest(request);

  return json({ result, nextQuestionId });
};

export default function Page() {
  const {
    questionItem,
    userQuestion,
    variant,
    enrollmentTaxonomy,
    id,
    userId,
  } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10),
  );

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

    submit({ data, currentDate }, { method: "POST" });
  };

  const openConfig = () => setShowModal(true);
  const closeConfig = () => setShowModal(false);

  const changeDate = (date: string) => setCurrentDate(date);

  return (
    <>
      <div className="fixed right-0 left-0 mx-auto w-full max-w-desktop top-4 z-20">
        <div className="flex items-center justify-end">
          <button
            className="px-6 py-2 rounded-sm text-base text-contrast bg-primary-75"
            onClick={openConfig}
          >
            Config
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed right-0 left-0 top-0 bottom-0 w-full z-50">
          <div
            className="fixed right-0 left-0 top-0 bottom-0 w-full bg-black opacity-50"
            onClick={closeConfig}
          ></div>

          <div className="fixed left-0 right-0 w-full max-w-screen-sm mx-auto top-1/2 -translate-y-1/2 flex items-center justify-center bg-primary">
            <button
              className="absolute right-2 top-2 p-1 text-white font-bold"
              onClick={closeConfig}
            >
              X
            </button>
            <div className="flex flex-col justify-start gap-4 text-white font-medium py-4 px-8 w-full">
              <div>Question ID: {id}</div>
              <div>User ID: {userId} </div>
              <div>Question Status: {userQuestion.status}</div>
              <div>Attempts: {userQuestion.attempts}</div>
              <div>Streak: {userQuestion.streak}</div>
              <div>Difficulty: {userQuestion.difficulty}</div>
              <div>Latest Review Gap: {userQuestion.latest_review_gap}</div>
              <div>
                Last Answered On:{" "}
                {userQuestion.last_answered_on
                  ? new Date(userQuestion.last_answered_on).toLocaleDateString()
                  : "--"}
              </div>
              <div>
                Active On:{" "}
                {userQuestion.active_on
                  ? new Date(userQuestion.active_on).toLocaleDateString()
                  : "--"}
              </div>

              <div>
                <label> Answer Date: </label>
                <input
                  type="date"
                  className="text-black px-2 py-1 ml-1"
                  value={currentDate}
                  onChange={(e) => changeDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <Question
        key={questionItem.uid}
        onContinue={() => navigate("/nq")}
        onSubmit={onSubmit}
        variant={variant}
        onClose={() => navigate("/")}
        questionItem={questionItem}
        enrollmentTaxonomy={enrollmentTaxonomy}
      />
    </>
  );
}
