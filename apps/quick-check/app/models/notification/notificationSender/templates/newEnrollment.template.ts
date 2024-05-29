import { getContentStackClient } from "~/contentstack.server"

import { invariant } from "quickcheck-shared"

import type { NotificationUserEnrollmentFragment } from "~/graphql"

import {
  prepareNotificationTemplateEnrollmentData,
  type NotificationTemplateProps,
  type NotificationTemplateReturn,
} from "../utils/notificationData"

/**
 * New Enrollment Notification Template
 */

export type NewEnrollmentTemplateProps = {
  notificationType: "NewEnrollment"
  notificationEnrollment: NotificationUserEnrollmentFragment
}

type NewEnrollmentTemplate = (
  props: NewEnrollmentTemplateProps & NotificationTemplateProps,
) => Promise<NotificationTemplateReturn>

export const newEnrollmentTemplate: NewEnrollmentTemplate = async ({ user, notificationEnrollment }) => {
  const firstQuestion = notificationEnrollment.first_question[0]
  invariant(firstQuestion, "No question found")

  const contentStack = getContentStackClient(user.language_preference)

  const enrollmentTaxonomy = await contentStack.getTaxonomy(notificationEnrollment.taxonomy_id)
  invariant(enrollmentTaxonomy, "No taxonomy found")

  const { enrollment } = prepareNotificationTemplateEnrollmentData({
    enrollment: enrollmentTaxonomy,
  })

  return {
    workflowId: { name: "NewEnrollment", id: enrollment.uid },
    notificationType: "NewEnrollment",
    contentData: {
      unansweredQuestions: user.unanswered_questions,
      enrollment: {
        ...enrollment,
        firstQuestion: {
          uid: firstQuestion.id,
        },
      },
    },
  }
}
