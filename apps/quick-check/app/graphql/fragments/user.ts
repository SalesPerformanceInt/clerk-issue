import { graphql } from "~/graphql";

export const UserWithActiveToken = graphql(/* GraphQL */ `
  fragment UserWithActiveToken on user {
    ...BaseUser
    active_tokens: link_tokens(where: { active: { _eq: true } }) {
      ...BaseLinkToken
    }
  }
`);

export const BaseUser = graphql(/* GraphQL */ `
  fragment BaseUser on user {
    __typename
    tenant_id
    email
    first_name
    language_preference
    last_name
    next_question {
      ...BaseUserQuestion
    }
    phone_number
    timezone
    user_id
    sms_enabled
    learning_records {
      ...BaseLearningRecord
    }
  }
`);
