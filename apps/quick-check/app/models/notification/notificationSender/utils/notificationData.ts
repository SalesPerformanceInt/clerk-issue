import type { NotificationWorkflowProps } from "@salesperformanceint/notification-service-js"
import type { StrictOmit } from "ts-essentials"

import type { RestrictQuestionItemVariant } from "quickcheck-shared"

import type { QuestionItem, Taxon } from "~qcs/contentstack"
import type { GetUserEmailData } from "~/graphql"

import type { Schedule, WorkflowID } from "~/models/notification/notificationService"

import type { GetLoginDataFromUserProps } from "./notificationUserData"

/**
 * Notification Data Types
 */

export type NotificationSharedData = Pick<NotificationWorkflowProps["notificationData"], "loginUrl" | "userData"> & {
  schedule: Schedule
}

export type NotificationTemplateData = StrictOmit<
  NotificationWorkflowProps["notificationData"],
  "loginUrl" | "userData"
> & {
  workflowId: WorkflowID
}

type NotificationTemplateContentData = StrictOmit<NotificationTemplateData, "notificationType" | "workflowId">

/**
 * Notification Template Fn
 */

export type NotificationTemplateProps = GetLoginDataFromUserProps
export type NotificationTemplateReturn = NotificationTemplateData

export type NotificationTemplateFn = (props: NotificationTemplateProps) => Promise<NotificationTemplateReturn>

/**
 * Notification Shared Data
 */

type PrepareNotificationSharedDataProps = {
  user: GetUserEmailData
  loginUrl: string
  schedule?: Schedule
}

export const prepareNotificationSharedData = ({
  user,
  loginUrl,
  schedule = { now: true },
}: PrepareNotificationSharedDataProps): NotificationSharedData => ({
  schedule,
  loginUrl,
  userData: {
    uid: user.user_id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    language: user.language_preference,
  },
})

/**
 * Notification Template Enrollment Data
 */

type PrepareNotificationTemplateEnrollmentDataProps = {
  enrollment: Taxon
}

export const prepareNotificationTemplateEnrollmentData = ({
  enrollment,
}: PrepareNotificationTemplateEnrollmentDataProps) =>
  ({
    enrollment: {
      uid: enrollment.uid,
      taxon: {
        displayName: enrollment.display_name,
      },
    },
  }) satisfies NotificationTemplateContentData

/**
 * Notification Template Question Data
 */

type PrepareNotificationTemplateQuestionDataProps = {
  user: GetUserEmailData
  questionItem: QuestionItem
  questionVariant: RestrictQuestionItemVariant<"mcquestion">
}

export const prepareNotificationTemplateQuestionData = ({
  questionItem,
  questionVariant,
}: PrepareNotificationTemplateQuestionDataProps) =>
  ({
    question: {
      variantName: "question_mc" as const,
      variantData: {
        uid: questionItem.uid,
        instruction: questionVariant!.mcquestion.instruction,
        prompt: questionVariant!.mcquestion.prompt || "",
        stem: questionVariant!.mcquestion.stem,
        topic: {
          displayName: questionItem.topic[0]?.display_name || "",
        },
        choices: questionVariant!.mcquestion.choices.map(({ choice }) => ({
          body: choice.body,
          uid: choice._metadata.uid,
        })),
      },
    },
  }) satisfies NotificationTemplateContentData
