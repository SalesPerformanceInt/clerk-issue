import { invariant } from "quickcheck-shared"

import type { BaseUserAnswerFragment, BaseUserQuestionFragment } from "~/graphql"

import { REVIEW_CORRECT, REVIEW_DIFFICULTY_BASE, REVIEW_WRONG } from "~/utils/constants"
import { getNextValidBusinessDate } from "~/utils/date"

import type { Answer, AnswerToReview } from "../answer.type"

import { parseAnswer } from "./parseAnswer"
import { reviewAnswer } from "./reviewAnswer"
import { scoreAnswer } from "./scoreAnswer"

/**
 * Get Answers
 */

export const getCurrentAnswer = async (request: Request) => {
  const formData = await request.formData()

  const currentAnswer = parseAnswer(formData.get("data"))

  invariant(currentAnswer, "Answer not found")

  return { currentAnswer }
}

/**
 * Get Reviewed Answer
 */

export const getReviewedAnswer = (
  userQuestion: BaseUserQuestionFragment,
  userQuestionAnswers: BaseUserAnswerFragment[] | null,
  currentAnswer: Answer,
) => {
  const answerToReview: AnswerToReview = {
    answerDate: currentAnswer.now,
    lastAnsweredOn: userQuestion.last_answered_on || userQuestion.active_on!,
    performanceRating: currentAnswer.correct ? REVIEW_CORRECT : REVIEW_WRONG,
    latestReviewGap: userQuestion.latest_review_gap,
    difficulty: userQuestion.difficulty || REVIEW_DIFFICULTY_BASE,
    streak: userQuestion.streak || 0,
    score: scoreAnswer(userQuestionAnswers, currentAnswer),
  }

  const reviewedAnswer = reviewAnswer(answerToReview)

  const userQuestionNextActiveDate = getNextValidBusinessDate(
    new Date(currentAnswer.now),
    reviewedAnswer.latestReviewGap,
  )

  return {
    reviewedAnswer,
    userQuestionNextActiveDate,
  }
}
