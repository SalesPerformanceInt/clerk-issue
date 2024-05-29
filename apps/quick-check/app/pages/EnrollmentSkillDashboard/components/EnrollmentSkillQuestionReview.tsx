import { Suspense, type FC } from "react"
import { useTranslation } from "react-i18next"

import { TypedAwait } from "remix-typedjson"

import { CardSkeleton, getVariant, QuestionReviewCard, Section } from "quickcheck-shared"

import type { EnrollmentSkillDashboardQuestions } from "~/graphql"

/**
 * Enrollment Skill Question Review Suspense Component
 */

type EnrollmentSkillQuestionReviewSuspenseProps = {
  skillQuestionsPromise: Promise<EnrollmentSkillDashboardQuestions | null>
}

export const EnrollmentSkillQuestionReviewSuspense: FC<EnrollmentSkillQuestionReviewSuspenseProps> = ({
  skillQuestionsPromise,
}) => {
  const { t } = useTranslation()

  return (
    <Section className="mt-4" title={t("enrollment.skill.question_review")}>
      <Suspense fallback={<CardSkeleton className="flow h-36 w-full flex-grow p-6" title />}>
        <TypedAwait resolve={skillQuestionsPromise}>
          {(skillQuestions) =>
            skillQuestions ? <EnrollmentSkillQuestionReview skillQuestions={skillQuestions} /> : null
          }
        </TypedAwait>
      </Suspense>
    </Section>
  )
}

/**
 * Enrollment Skill Question Review Component
 */

type EnrollmentSkillQuestionReviewProps = {
  skillQuestions: EnrollmentSkillDashboardQuestions
}

const EnrollmentSkillQuestionReview: FC<EnrollmentSkillQuestionReviewProps> = ({ skillQuestions }) => {
  return skillQuestions.map((question) => {
    const { questionData } = question
    if (!questionData) return null

    const questionVariant = getVariant(questionData, "mcquestion")
    if (!questionVariant) return null

    const correctAnswers = question.user_answers.filter((answer) => answer.correct).length
    const incorrectAnswers = question.user_answers.length - correctAnswers

    return (
      <QuestionReviewCard
        key={questionData.uid}
        questionItem={questionData}
        questionVariant={questionVariant}
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
      />
    )
  })
}
