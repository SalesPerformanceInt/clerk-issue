import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";

import { Question } from "accelerate-learner-ui";
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
  const navigate = useNavigate();

  const currentTopic = "Foo Bar the Topic";
  const totalScore = 1200;
  const topicPercentage = 77;

  return (
    <Question
      variant="mcquestion"
      onClose={() => navigate("/")}
      questionItem={questionItem}
      currentTopic={currentTopic}
      topicPercentage={topicPercentage}
      totalScore={totalScore}
    />
  );
}

// export { ErrorBoundary } from "~/components/ErrorBoundary";
