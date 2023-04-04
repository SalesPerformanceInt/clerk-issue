export const allTrueOrFalseQuery = () => `
  QuestionitemVariantsTfquestion {
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
`;
