import { graphql } from "~/graphql";

export const BaseLearningRecord = graphql(/* GraphQL */ `
  fragment BaseLearningRecord on learning_record {
    __typename
    created_at
    data
    event_type
    id
    user_id
  }
`);
