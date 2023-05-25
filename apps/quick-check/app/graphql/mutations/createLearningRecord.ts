import {
  graphql,
  type GraphQLClient,
  type Learning_Record_Insert_Input,
} from "~/graphql";

export const CREATE_LEARNING_RECORD = graphql(/* GraphQL */ `
  mutation CreateLearningRecord(
    $learning_record: learning_record_insert_input!
  ) {
    insert_learning_record_one(object: $learning_record) {
      created_at
      data
      event_type
      id
      user_id
    }
  }
`);

export async function createLearningRecord(
  this: GraphQLClient,
  learning_record: Learning_Record_Insert_Input,
) {
  try {
    const { data } = await this.client.mutate({
      mutation: CREATE_LEARNING_RECORD,
      variables: { learning_record },
    });

    if (!data?.insert_learning_record_one) return null;

    return data.insert_learning_record_one;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
