import { graphql } from "~/graphql";

export const BaseLearningRecord = graphql(/* GraphQL */ `
  fragment BaseLearningRecord on learning_record {
    __typename
    data
    event_type
    id
  }
`);
