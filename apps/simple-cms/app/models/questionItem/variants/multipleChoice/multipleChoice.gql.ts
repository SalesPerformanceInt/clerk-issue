export const getAllMultipleChoice = () => `
  QuestionitemVariantsMcquestion {
    __typename
    mcquestion {
      choices {
        ... on QuestionitemVariantsMcquestionBlockChoicesChoice {
          __typename
          choice {
            body
            correct
            feedback
            points
          }
        }
      }
      instruction
      prompt
      stem
    }
  }
`;
