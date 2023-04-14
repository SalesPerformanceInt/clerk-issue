import { useState } from "react";

import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  Confetti,
  ConfidenceModal,
  Container,
  Header,
  MultipleChoice,
  type ChoiceData,
  type OnChoiceSelect,
} from "accelerate-learner-ui";
import invariant from "tiny-invariant";
import { contentStack } from "~/contentstack.server";

export const loader = async ({ params, request }: LoaderArgs) => {
  invariant(params.questionId, "questionId not found");

  const questionItem = await contentStack.getQuestionItem(params.questionId);
  if (!questionItem) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({ questionItem });
};

export default function Page() {
  const { questionItem } = useLoaderData<typeof loader>();

  const variants = questionItem?.variants;
  invariant(variants, "no variants found");

  const mcquestion = variants.find(
    (variant) => variant?.__typename === "QuestionitemVariantsMcquestion",
  );

  invariant(
    mcquestion?.__typename === "QuestionitemVariantsMcquestion",
    "no multiple choice found",
  );

  invariant(mcquestion.mcquestion, "no multiple choice found");

  const [selected, setSelected] = useState<ChoiceData | null>(null);
  const [showConfidence, setShowConfidence] = useState(false);
  const [numberOfConfettiPieces, setNumberOfConfettiPieces] = useState<
    number | null
  >(null);

  const onConfidenceClick = (numberOfPieces: number) => {
    setShowConfidence(false);
    if (selected?.correct) setNumberOfConfettiPieces(numberOfPieces);
  };

  const onChoiceSelect: OnChoiceSelect = ({ choice }) => {
    if (choice) {
      setSelected(selected ? null : choice);
      setShowConfidence(!showConfidence);
    }
  };

  return (
    <>
      <div className="flex min-h-screen w-full justify-center bg-indigo-950">
        <Container>
          <Header currentTopic="Foo Bar the Topic" />
          <MultipleChoice
            question={mcquestion.mcquestion}
            selected={selected}
            onChoiceSelect={onChoiceSelect}
            showConfidence={showConfidence}
          />
          <ConfidenceModal
            show={showConfidence}
            onConfidenceClick={onConfidenceClick}
          />
        </Container>
      </div>
      {numberOfConfettiPieces && (
        <Confetti
          recycle={false}
          gravity={0.2}
          numberOfPieces={numberOfConfettiPieces}
          onConfettiComplete={() => setNumberOfConfettiPieces(null)}
        />
      )}
    </>
  );
}

// export { ErrorBoundary } from "~/components/ErrorBoundary";
