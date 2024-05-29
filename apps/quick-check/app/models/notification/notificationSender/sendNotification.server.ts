import { pipe } from "remeda"

import { andThen, logError } from "quickcheck-shared"

import { Schedule } from "~/models/notification/notificationService"

import { prepareNotificationSharedData } from "./utils/notificationData"
import type { NotificationTemplate } from "./utils/notificationTemplates.types"
import {
  getLoginDataFromUser,
  getUserDataFromEmail,
  type GetUserDataFromEmailProps,
} from "./utils/notificationUserData"
import { getFirstValidNotificationTemplate } from "./utils/validNotificationTemplate"

import { logNotificationEvent } from "./handlers/logNotificationEvent"
import { matchNotificationTemplate } from "./handlers/matchNotificationTemplate"
import { sendNotificationWorkflow } from "./handlers/sendNotificationWorkflow"

/**
 * Send Notification
 */

type SendNotificationProps = GetUserDataFromEmailProps & {
  template?: NotificationTemplate
  schedule?: Schedule
}

export const sendNotification = async ({ request, userId, now, template, schedule }: SendNotificationProps) => {
  try {
    const { user, token, loginUrl } = await pipe(
      { request, userId, now },
      andThen(getUserDataFromEmail),
      andThen(getLoginDataFromUser),
    )

    const notificationTemplate = template || getFirstValidNotificationTemplate({ user, now })
    if (!notificationTemplate) return null

    const notificationSharedData = prepareNotificationSharedData({
      user,
      loginUrl,
      schedule,
    })

    const notificationTemplateData = await matchNotificationTemplate({
      request,
      user,
      ...notificationTemplate,
    })

    const notificationLog = await sendNotificationWorkflow({
      notificationSharedData,
      notificationTemplateData,
      notificationType: notificationTemplate.notificationType,
    })

    logNotificationEvent({ request, user, token, notificationLog })

    return { notificationLog }
  } catch (error) {
    logError({ error, log: "sendEmailTemplate" })
    return null
  }
}
