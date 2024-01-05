import { logError } from "quickcheck-shared";

import {
  graphql,
  type GQLProxyData,
  type Learning_Record_Insert_Input,
  type WithApolloClient,
} from "~/graphql";

export const CREATE_LEARNING_RECORD = graphql(/* GraphQL */ `
  mutation CreateLearningRecord(
    $learning_record: learning_record_insert_input!
  ) {
    insert_learning_record_one(object: $learning_record) {
      ...BaseLearningRecord
    }
  }
`);

export async function createLearningRecord(
  this: WithApolloClient,
  learning_record: Learning_Record_Insert_Input,
  _proxyData: GQLProxyData,
) {
  try {
    const { data } = await this.client.mutate({
      mutation: CREATE_LEARNING_RECORD,
      variables: { learning_record },
    });

    if (!data?.insert_learning_record_one) return null;

    return data.insert_learning_record_one;
  } catch (error) {
    logError({ error, log: "createLearningRecord" });
    return null;
  }
}
