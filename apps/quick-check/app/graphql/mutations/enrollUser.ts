import { pipe, shuffle } from "remeda";
import invariant from "tiny-invariant";
import { contentStack } from "~/contentstack.server";
import {
  graphql,
  type User_Enrollment_Insert_Input,
  type WithApolloClient,
} from "~/graphql";

import {
  andThen,
  getNodeInTreesById,
  promiseWrapper,
  type QuestionItem,
  type TreeNode,
} from "quickcheck-shared";

import { prepareActiveQuestions } from "~/utils/prepareActiveQuestions";

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

const getActiveQuestions =
  (user_id: string) => async (questions: QuestionItem[]) => {
    const shuffledActiveQuestions = pipe(
      questions,
      shuffle(),
      prepareActiveQuestions(user_id),
    );

    return shuffledActiveQuestions;
  };

const prepareUserEnrollmentInput =
  (user_id: string, taxonomy_id: string) =>
  async (shuffledActiveQuestions: User_Enrollment_Insert_Input[]) => {
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
  user_id: string,
  taxonomy_id: string,
) {
  const userEnrollmentInput = await pipe(
    getTaxon(taxonomy_id),
    andThen(getQuestions),
    andThen(getActiveQuestions(user_id)),
    andThen(prepareUserEnrollmentInput(user_id, taxonomy_id)),
  );

  const [enrolledUser, error] = await promiseWrapper(
    this.client.mutate({
      mutation: ENROLL_USER,
      variables: { user_enrollment: userEnrollmentInput },
    }),
  );

  if (error) {
    console.log("ERROR - enrollUser", error);

    return null;
  }

  return enrolledUser?.data?.insert_user_enrollment_one ?? null;
}
