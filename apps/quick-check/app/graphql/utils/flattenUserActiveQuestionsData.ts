import { UserActiveQuestionsDataFragment } from "~/graphql"

export const flattenUserActiveQuestionsData = (data: UserActiveQuestionsDataFragment) => ({
  unanswered_questions: data.unanswered_questions.aggregate?.count ?? 0,
  active_enrollments: data.active_enrollments.aggregate?.count,
})
