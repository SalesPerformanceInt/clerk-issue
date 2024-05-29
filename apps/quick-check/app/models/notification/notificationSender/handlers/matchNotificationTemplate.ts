import { match } from "ts-pattern"

import {
  completedEnrollmentTemplate,
  newEnrollmentTemplate,
  questionTemplate,
  requestedLinkTemplate,
  userAwayTemplate,
  userInactiveTemplate,
} from "../templates"
import type { NotificationTemplateProps } from "../utils/notificationData"
import type { NotificationTemplate } from "../utils/notificationTemplates.types"

/**
 * Notification Template Pattern-Matching
 */

type NotificationTemplateUnion = NotificationTemplateProps & NotificationTemplate

export const matchNotificationTemplate = (notificationData: NotificationTemplateUnion) => {
  return match(notificationData)
    .with({ notificationType: "CompletedEnrollment" }, completedEnrollmentTemplate)
    .with({ notificationType: "NewEnrollment" }, newEnrollmentTemplate)
    .with({ notificationType: "Question" }, questionTemplate)
    .with({ notificationType: "RequestedLink" }, requestedLinkTemplate)
    .with({ notificationType: "UserAway" }, userAwayTemplate)
    .with({ notificationType: "UserInactive" }, userInactiveTemplate)
    .exhaustive()
}
