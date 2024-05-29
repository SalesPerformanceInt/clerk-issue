import { getVariant, invariant } from "quickcheck-shared"

import { getQuestionData } from "~/models/question"

import {
  prepareNotificationTemplateEnrollmentData,
  prepareNotificationTemplateQuestionData,
  type NotificationTemplateProps,
  type NotificationTemplateReturn,
} from "../utils/notificationData"

/**
 * Question Notification Template
 */

export type QuestionTemplateProps = {
  notificationType: "Question"
}

type QuestionTemplate = (
  props: QuestionTemplateProps & NotificationTemplateProps,
) => Promise<NotificationTemplateReturn>

export const questionTemplate: QuestionTemplate = async ({ request, user }) => {
  invariant(user.user_question_activated_today, "Active User Question not found")

  const { questionItem, enrollmentTaxonomy } = await getQuestionData(user.user_question_activated_today)

  const questionVariant = getVariant(questionItem, "mcquestion")
  invariant(questionVariant, "Question Variant not found")

  const { enrollment } = prepareNotificationTemplateEnrollmentData({
    enrollment: enrollmentTaxonomy,
  })

  const { question } = prepareNotificationTemplateQuestionData({
    user,
    questionItem,
    questionVariant,
  })

  return {
    workflowId: { name: "QuestionMC", id: questionItem.uid },
    notificationType: "Question",
    contentData: {
      unansweredQuestions: user.unanswered_questions,
      enrollment,
      question,
    },
  }
}
