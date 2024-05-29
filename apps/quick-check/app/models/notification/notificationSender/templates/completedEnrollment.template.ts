import { getContentStackClient } from "~/contentstack.server"

import { invariant } from "quickcheck-shared"

import type { NotificationUserEnrollmentFragment } from "~/graphql"

import {
  prepareNotificationTemplateEnrollmentData,
  type NotificationTemplateProps,
  type NotificationTemplateReturn,
} from "../utils/notificationData"

/**
 * Completed Enrollment Notification Template
 */

export type CompletedEnrollmentTemplateProps = {
  notificationType: "CompletedEnrollment"
  notificationEnrollment: NotificationUserEnrollmentFragment
}

type CompletedEnrollmentTemplate = (
  props: CompletedEnrollmentTemplateProps & NotificationTemplateProps,
) => Promise<NotificationTemplateReturn>

export const completedEnrollmentTemplate: CompletedEnrollmentTemplate = async ({ user, notificationEnrollment }) => {
  const contentStack = getContentStackClient(user.language_preference)

  const enrollmentTaxonomy = await contentStack.getTaxonomy(notificationEnrollment.taxonomy_id)
  invariant(enrollmentTaxonomy, "No taxonomy found")

  const { enrollment } = prepareNotificationTemplateEnrollmentData({
    enrollment: enrollmentTaxonomy,
  })

  return {
    workflowId: { name: "CompletedEnrollment", id: enrollment.uid },
    notificationType: "CompletedEnrollment",
    contentData: {
      unansweredQuestions: user.unanswered_questions,
      enrollment,
    },
  }
}
