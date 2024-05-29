import type {
  CompletedEnrollmentTemplateProps,
  NewEnrollmentTemplateProps,
  QuestionTemplateProps,
  RequestedLinkTemplateProps,
  UserAwayTemplateProps,
  UserInactiveTemplateProps,
} from "../templates"

/**
 * Notification Templates
 */

export type NotificationTemplate =
  | CompletedEnrollmentTemplateProps
  | NewEnrollmentTemplateProps
  | QuestionTemplateProps
  | RequestedLinkTemplateProps
  | UserAwayTemplateProps
  | UserInactiveTemplateProps
