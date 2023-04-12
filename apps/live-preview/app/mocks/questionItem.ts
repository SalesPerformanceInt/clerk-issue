export const questionItemMock = {
  client_list: null,
  key_behavior: null,
  title: "What is the name of a baby turkey?",
  variants: [
    {
      __typename: "QuestionitemVariantsMcquestion",
      mcquestion: {
        choices: [
          {
            __typename: "QuestionitemVariantsMcquestionBlockChoicesChoice",
            choice: {
              body: null,
              correct: null,
              feedback: null,
              points: null,
            },
          },
          {
            __typename: "QuestionitemVariantsMcquestionBlockChoicesChoice",
            choice: {
              body: null,
              correct: null,
              feedback: null,
              points: null,
            },
          },
          {
            __typename: "QuestionitemVariantsMcquestionBlockChoicesChoice",
            choice: {
              body: null,
              correct: null,
              feedback: null,
              points: null,
            },
          },
          {
            __typename: "QuestionitemVariantsMcquestionBlockChoicesChoice",
            choice: {
              body: null,
              correct: null,
              feedback: null,
              points: null,
            },
          },
        ],
        instruction: "Choose from the following",
        prompt: "Answer the following",
        stem: '<p>What is the name of a baby turkey?</p><p></p><img src="https://images.contentstack.io/v3/assets/blt6ce48de9245bc0a9/blte990779bc7203764/641dd5c38fb92c3c39ea9d98/Baby-turkey_JR.jpeg" height="auto"/>',
      },
    },
    {
      __typename: "QuestionitemVariantsTfquestion",
      tfquestion: {
        correct: true,
        feedback: "<p>You got it right</p>",
        incorrect_feedback: null,
        instruction: "",
        points: 10,
        prompt: "",
        stem: '<p>A baby turkey is called a "poult".</p>',
      },
    },
  ],
};
