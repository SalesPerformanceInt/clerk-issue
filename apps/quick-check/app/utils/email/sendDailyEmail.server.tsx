import { QuickcheckInactivityEmail, QuickcheckQuestionEmail } from "emails";
import { DateTime } from "luxon";
import invariant from "tiny-invariant";

import {
  getAdminApolloClient,
  getAdminApolloClientFromRequest,
} from "~/graphql";

import { sendEmail } from "~/utils/email/postmark/email";
import { remixI18next } from "~/utils/i18next.server";
import { getLoginUrl } from "~/utils/urls";

import { getQuestionData } from "~/models/question";
import { generateNextQuestionForUser } from "~/models/user";

export const sendDailyEmail = async (
  userId: string,
  request: Request,
  now?: string,
) => {
  const adminApolloClient = now
    ? await getAdminApolloClient(now)
    : await getAdminApolloClientFromRequest(request);

  const user = await adminApolloClient.getUserEmailData({ userId });

  invariant(user, "No user found");

  const activeToken = (
    await adminApolloClient.generateNewToken({
      userId: user.user_id,
      tenantId: user.tenant_id,
    })
  )?.id;

  invariant(activeToken, "No active token found");

  const t = await remixI18next.getFixedT(user.language_preference);

  const lastAnswered = user.last_user_answer?.created_at;

  const isInactive = lastAnswered
    ? DateTime.fromISO(lastAnswered).toISODate()! <=
      DateTime.now().minus({ days: 7 }).toISODate()!
    : false;

  const loginUrl = getLoginUrl(activeToken, request);

  if (isInactive) {
    const nextQuestion = await generateNextQuestionForUser(request, userId);

    invariant(nextQuestion, "Next question not found");

    const { questionItem, enrollmentTaxonomy } =
      await getQuestionData(nextQuestion);

    const response = await sendEmail(
      user?.email,
      t("emails.inactive.subject.come_back", {
        first_name: user.first_name,
      }),
      `${t("emails.inactive.subject.come_back", {
        first_name: user.first_name,
      })}  ${loginUrl}`,
      <QuickcheckInactivityEmail
        questionItem={questionItem}
        enrollmentTaxonomy={enrollmentTaxonomy}
        loginUrl={loginUrl}
        questionId={nextQuestion.id}
        t={t}
      />,
    );

    return {
      type: "inactive",
      response,
    };
  }

  if (user.user_question_activated_today) {
    const { questionItem, enrollmentTaxonomy } = await getQuestionData(
      user.user_question_activated_today,
    );

    const response = await sendEmail(
      user?.email,
      t("emails.question.subject.available", {
        first_name: user.first_name,
      }),
      loginUrl,
      <QuickcheckQuestionEmail
        questionItem={questionItem}
        enrollmentTaxonomy={enrollmentTaxonomy}
        loginUrl={loginUrl}
        questionId={user.user_question_activated_today.id}
        t={t}
        userData={user}
      />,
    );

    return {
      type: "active",
      response,
    };
  }

  return {
    type: "no_email",
  };
};
