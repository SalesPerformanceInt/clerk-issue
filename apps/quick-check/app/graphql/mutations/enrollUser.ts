import invariant from "tiny-invariant";
import { contentStack } from "~/contentstack.server";
import {
  graphql,
  type User_Enrollment_Insert_Input,
  type WithApolloClient,
} from "~/graphql";

import { getNodeInTreesById } from "quickcheck-shared";

import { prepareActiveQuestions } from "~/utils/prepareActiveQuestions";

import { buildTaxonTrees } from "~/models/taxonomy";

export const ENROLL_USER = graphql(/* GraphQL */ `
  mutation EnrollUser($user_enrollment: user_enrollment_insert_input!) {
    insert_user_enrollment_one(object: $user_enrollment) {
      id
    }
  }
`);

export async function enrollUser(
  this: WithApolloClient,
  user_id: string,
  taxonomy_id: string,
) {
  const taxonTrees = await buildTaxonTrees();
  const taxon = getNodeInTreesById(taxonTrees, taxonomy_id);

  invariant(taxon, "No matching Taxon found.");

  const descendantUids = taxon
    .getDescendants()
    .map(({ dataObj }) => dataObj.uid);

  const questions = await contentStack.getQuestionItems((query) =>
    query.containedIn("topic.uid", descendantUids),
  );

  invariant(questions, "No matching questions found.");

  const activeQuestions = prepareActiveQuestions(questions);

  const input: User_Enrollment_Insert_Input = {
    user_id,
    taxonomy_id,
    user_questions: {
      data: questions?.map((question, questionIndex) => {
        return {
          question_id: question.uid,
          taxonomy_id: question.topic?.[0]?.uid,
          user_id,
          active_on: activeQuestions[questionIndex],
        };
      }),
    },
  };

  try {
    const result = await this.client.mutate({
      mutation: ENROLL_USER,
      variables: { user_enrollment: input },
    });

    return result.data?.insert_user_enrollment_one ?? null;
  } catch (error) {
    console.log("ERROR - enrollUser", error);
    return null;
  }
}
