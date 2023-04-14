import { graphql } from "~/generated";

export const QuestionitemVariantsMcquestionFragment = graphql(/* GraphQL */ `
  fragment QuestionitemVariantsMcquestionFragment on QuestionitemVariantsMcquestion {
    __typename
    mcquestion {
      choices {
        ...QuestionitemVariantsMcquestionBlockChoicesFragment
      }
      instruction
      prompt
      stem
    }
  }
`);

export const QuestionitemVariantsMcquestionBlockChoicesFragment =
  graphql(/* GraphQL */ `
    fragment QuestionitemVariantsMcquestionBlockChoicesFragment on QuestionitemVariantsMcquestionBlockChoicesChoice {
      __typename
      choice {
        body
        correct
        feedback
        points
      }
    }
  `);

export const QuestionitemVariantsTfquestionFragment = graphql(/* GraphQL */ `
  fragment QuestionitemVariantsTfquestionFragment on QuestionitemVariantsTfquestion {
    __typename
    tfquestion {
      correct
      feedback
      incorrect_feedback
      instruction
      points
      prompt
      stem
    }
  }
`);

export const QuestionitemVariantsFragment = graphql(/* GraphQL */ `
  fragment QuestionitemVariantsFragment on QuestionitemVariants {
    ... on QuestionitemVariantsMcquestion {
      ...QuestionitemVariantsMcquestionFragment
    }
    ... on QuestionitemVariantsTfquestion {
      ...QuestionitemVariantsTfquestionFragment
    }
  }
`);

export const QuestionItemFragment = graphql(/* GraphQL */ `
  fragment QuestionItemFragment on Questionitem {
    title
    variants {
      ... on QuestionitemVariantsMcquestion {
        ...QuestionitemVariantsMcquestionFragment
      }
      ... on QuestionitemVariantsTfquestion {
        ...QuestionitemVariantsTfquestionFragment
      }
    }
    system {
      uid
      tags
      locale
      created_by
      created_at
      content_type_uid
      branch
      updated_at
      updated_by
      version
    }
  }
`);
