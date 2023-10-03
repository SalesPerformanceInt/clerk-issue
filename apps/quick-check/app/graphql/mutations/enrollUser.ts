import { pipe, shuffle } from "remeda";
import invariant from "tiny-invariant";

import {
  andThen,
  getNodeInTreesById,
  logError,
  promiseWrapper,
  type QuestionItem,
  type TreeNode,
} from "quickcheck-shared";

import { contentStack } from "~/contentstack.server";

import {
  graphql,
  type GQLUserProxyData,
  type User_Enrollment_Insert_Input,
  type User_Question_Insert_Input,
  type WithApolloClient,
} from "~/graphql";

import { ENROLLMENT_PERIOD } from "~/utils/constants";
import { getNextValidBusinessDate } from "~/utils/date";

import { buildTaxonTrees, type TaxonomyDataObj } from "~/models/taxonomy";

/**
 * GraphQL
 */

export const ENROLL_USER = graphql(/* GraphQL */ `
  mutation EnrollUser($user_enrollment: user_enrollment_insert_input!) {
    insert_user_enrollment_one(object: $user_enrollment) {
      id
    }
  }
`);

/**
 * Prepare User Enrollment
 */

const getTaxon = async (taxonomy_id: string) => {
  const taxonTrees = await buildTaxonTrees();
  const taxon = getNodeInTreesById(taxonTrees, taxonomy_id);

  invariant(taxon, "No matching Taxon found.");

  return taxon;
};

const getQuestions = async (taxon: TreeNode<TaxonomyDataObj>) => {
  const descendantUids = taxon
    .getDescendants()
    .map(({ dataObj }) => dataObj.uid);

  const questions = await contentStack.getQuestionItems((query) =>
    query.containedIn("topic.uid", descendantUids),
  );

  invariant(questions, "No matching questions found.");

  return questions;
};

const prepareActiveQuestionsInput = (user_id: string) => {
  const prepareActiveQuestionGap =
    (minQuestionsPerDay: number) => (questionIndex: number) =>
      Math.floor((1 / minQuestionsPerDay) * Math.max(0, questionIndex));

  return (questions: QuestionItem[]) => {
    const baseDate = new Date();

    const minQuestionsPerDay = questions.length / ENROLLMENT_PERIOD;
    const getActiveQuestionGap = prepareActiveQuestionGap(minQuestionsPerDay);

    const activeQuestionsInput = questions.map(
      (question, questionIndex): User_Question_Insert_Input => {
        const activeQuestionGap =
          getActiveQuestionGap(questionIndex) -
          getActiveQuestionGap(questionIndex - 1);

        const activeDate = getNextValidBusinessDate(
          baseDate,
          activeQuestionGap,
        );

        return {
          user_id,
          question_id: question.uid,
          taxonomy_id: question.topic?.[0]?.uid,
          active_on: activeDate,
        };
      },
    );

    return activeQuestionsInput;
  };
};

const prepareUserEnrollmentInput =
  (user_id: string, taxonomy_id: string) =>
  (shuffledActiveQuestions: User_Question_Insert_Input[]) => {
    const userEnollmentInput: User_Enrollment_Insert_Input = {
      user_id,
      taxonomy_id,
      user_questions: {
        data: shuffledActiveQuestions,
      },
    };

    return userEnollmentInput;
  };

/**
 * Enroll User
 */

export async function enrollUser(
  this: WithApolloClient,
  taxonomy_id: string,
  proxyData: GQLUserProxyData,
) {
  const { userId } = proxyData;

  const userEnrollmentInput = await pipe(
    getTaxon(taxonomy_id),
    andThen(getQuestions),
    andThen(shuffle()),
    andThen(prepareActiveQuestionsInput(userId)),
    andThen(prepareUserEnrollmentInput(userId, taxonomy_id)),
  );

  const [enrolledUser, error] = await promiseWrapper(
    this.client.mutate({
      mutation: ENROLL_USER,
      variables: { user_enrollment: userEnrollmentInput },
    }),
  );

  if (error) return logError({ error, log: "enrollUser" });

  return enrolledUser?.data?.insert_user_enrollment_one ?? null;
}
