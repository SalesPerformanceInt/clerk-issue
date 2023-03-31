export const getAllTrueOrFalse = () => `
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
