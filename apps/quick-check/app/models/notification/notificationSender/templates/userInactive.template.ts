import { invariant } from "quickcheck-shared"

import { generateNextQuestionForUser } from "~/models/user"

import { type NotificationTemplateProps, type NotificationTemplateReturn } from "../utils/notificationData"

/**
 * User Inactive Notification Template
 */

export type UserInactiveTemplateProps = {
  notificationType: "UserInactive"
}

type UserInactiveTemplate = (
  props: UserInactiveTemplateProps & NotificationTemplateProps,
) => Promise<NotificationTemplateReturn>

export const userInactiveTemplate: UserInactiveTemplate = async ({ request, user }) => {
  const nextQuestion = await generateNextQuestionForUser(request, user.user_id)
  invariant(nextQuestion, "Next question not found")

  return {
    workflowId: { name: "UserInactive", id: user.user_id },
    notificationType: "UserInactive",
    contentData: {
      unansweredQuestions: user.unanswered_questions,
      question: {
        variantData: { uid: nextQuestion.id },
      },
    },
  }
}
