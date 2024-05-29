import { DateTime } from "luxon"

import type { GetUserEmailData } from "~/graphql"

import type { NotificationTemplate } from "./notificationTemplates.types"

/**
 * Valid Notification Template Types
 */

type ValidNotificationTemplateProps = {
  user: GetUserEmailData
  now?: string
}

/**
 * User Inactivity Check
 */

const getUserInactiveTemplate = ({ user, now }: ValidNotificationTemplateProps): null | NotificationTemplate => {
  const today = now ? DateTime.fromISO(now) : DateTime.now()
  const userAnsweredOnce = !!user.last_user_answer
  const userFirstEnrollment = user.first_user_enrollment

  if (userAnsweredOnce || !userFirstEnrollment) return null

  const isInactive =
    DateTime.fromISO(userFirstEnrollment.created_at).toISODate()! === today.minus({ days: 7 }).toISODate()!

  return isInactive ? { notificationType: "UserInactive" } : null
}

const getUserAwayTemplate = ({ user, now }: ValidNotificationTemplateProps): null | NotificationTemplate => {
  const today = now ? DateTime.fromISO(now) : DateTime.now()
  const lastAnswered = user.last_user_answer?.created_at

  if (!lastAnswered) return null

  const isAway = DateTime.fromISO(lastAnswered).toISODate()! === today.minus({ days: 7 }).toISODate()!

  return isAway ? { notificationType: "UserAway" } : null
}

/**
 * User Question Check
 */

const getQuestionActivatedTemplate = ({ user }: ValidNotificationTemplateProps): null | NotificationTemplate => {
  const isQuestionActivated = !!user.user_question_activated_today

  return isQuestionActivated ? { notificationType: "Question" } : null
}

/**
 * Find Notification Template
 */

const possibleNotificationTemplates = [getUserInactiveTemplate, getUserAwayTemplate, getQuestionActivatedTemplate]

export const getFirstValidNotificationTemplate = ({ user, now }: ValidNotificationTemplateProps) => {
  const notificationTemplate = possibleNotificationTemplates.find((template) => template({ user, now }))

  return notificationTemplate ? notificationTemplate({ user, now }) : null
}
