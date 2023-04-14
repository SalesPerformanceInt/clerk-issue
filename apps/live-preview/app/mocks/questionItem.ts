export const questionItemMock = {
  client_list: null,
  key_behavior: null,
  title: "What is the name of a baby turkey?",
  content_type: {
    uid: "questionitem",
  },
  variants: [
    {
      __typename: "QuestionitemVariantsMcquestion",
      mcquestion: {
        choices: [
          {
            __typename: "QuestionitemVariantsMcquestionBlockChoicesChoice",
            choice: {
              body: "Poult. Aenean pellentesque nulla vel tortor aliquet, vitae maximus elit lacinia. Etiam sed convallis lectus. In tristique ultrices vulputate. Curabitur faucibus pulvinar nisl. Integer vel quam magna.",
              correct: true,
              feedback: "Yep!",
              points: 4,
            },
          },
          {
            __typename: "QuestionitemVariantsMcquestionBlockChoicesChoice",
            choice: {
              body: "Chick. Cras non nibh ut sapien fringilla efficitur non sit amet nulla. Pellentesque vel condimentum sapien. In euismod sapien nec vulputate tempor. In et nisi sapien.",
              correct: false,
              feedback: "Nope",
              points: 0,
            },
          },
          {
            __typename: "QuestionitemVariantsMcquestionBlockChoicesChoice",
            choice: {
              body: "Hatchling",
              correct: false,
              feedback: "Sorry",
              points: 0,
            },
          },
          {
            __typename: "QuestionitemVariantsMcquestionBlockChoicesChoice",
            choice: {
              body: "Giblet. Nullam lacinia quam ante. Ut tincidunt quis nibh ut posuere.",
              correct: false,
              feedback: "Not quite.",
              points: 0,
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
        instruction: "Is the following statement correct?",
        points: 10,
        prompt: "",
        stem: '<p>A baby turkey is called a "poult".</p>',
      },
    },
  ],
};
