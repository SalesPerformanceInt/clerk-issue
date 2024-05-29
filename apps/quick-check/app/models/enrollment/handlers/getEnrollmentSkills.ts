import { filter, groupBy, length, mapValues, pipe, prop, reduce, values } from "remeda"

import { EnrollmentSkillData } from "quickcheck-shared"

import type { EnrollmentData } from "~/graphql"

type UserQuestion = EnrollmentData["user_questions"][number]

const getSkillData = (questions: UserQuestion[], skill: string | number | symbol): EnrollmentSkillData => {
  const questionsCount = length(questions)

  const answersCount = reduce(
    questions,
    (count, question) => count + (question.user_answers_aggregate.aggregate?.count ?? 0),
    0,
  )

  const unanswered = answersCount <= 0
  const completed = questions.every((question) => !!question.retired_on)

  const baselineCount = pipe(
    questions,
    filter((x) => x.first_answer[0]?.correct === true),
    length(),
  )
  const currentCount = pipe(
    questions,
    filter((x) => x.current_answer[0]?.correct === true),
    length(),
  )

  const getSkillPercentage = (target: number) => Math.round((target / questionsCount) * 100)

  return {
    skill: String(skill),
    baseline: getSkillPercentage(baselineCount),
    current: getSkillPercentage(currentCount),
    id: questions[0]?.taxonomy_id ?? "",
    unanswered,
    completed,
  }
}

export const getEnrollmentSkills = (questions: UserQuestion[]) =>
  pipe(questions, groupBy(prop("taxonomy_name")), mapValues(getSkillData), (skills) => values(skills))
