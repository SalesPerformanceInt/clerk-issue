import { getVariant, invariant } from "quickcheck-shared";

import { getQuestionData } from "~/models/question";
import { generateNextQuestionForUser } from "~/models/user";

import {
  prepareNotificationTemplateEnrollmentData,
  prepareNotificationTemplateQuestionData,
  type NotificationTemplateProps,
  type NotificationTemplateReturn,
} from "../utils/notificationData";

/**
 * User Away Notification Template
 */

export type UserAwayTemplateProps = {
  notificationType: "UserAway";
};

type UserAwayTemplate = (
  props: UserAwayTemplateProps & NotificationTemplateProps,
) => Promise<NotificationTemplateReturn>;

export const userAwayTemplate: UserAwayTemplate = async ({ request, user }) => {
  const nextQuestion = await generateNextQuestionForUser(request, user.user_id);
  invariant(nextQuestion, "Next question not found");

  const { questionItem, enrollmentTaxonomy } =
    await getQuestionData(nextQuestion);

  const questionVariant = getVariant(questionItem, "mcquestion");
  invariant(questionVariant, "Question Variant not found");

  const { enrollment } = prepareNotificationTemplateEnrollmentData({
    enrollment: enrollmentTaxonomy,
  });

  const { question } = prepareNotificationTemplateQuestionData({
    user,
    questionItem,
    questionVariant,
  });

  return {
    workflowId: { name: "UserAway", id: user.user_id },
    notificationType: "UserAway",
    contentData: {
      unansweredQuestions: user.unanswered_questions,
      enrollment,
      question,
    },
  };
};
