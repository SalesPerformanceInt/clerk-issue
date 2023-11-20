import { QuickcheckInactivityEmail, QuickcheckQuestionEmail } from "emails";
import { DateTime } from "luxon";
import invariant from "tiny-invariant";

import {
  getAdminApolloClient,
  getAdminApolloClientFromRequest,
} from "~/graphql";

import { sendEmail } from "~/utils/email/postmark/email";
import { remixI18next } from "~/utils/i18next.server";
import { getOriginFromRequest } from "~/utils/urls";
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
  
  const activeToken = await adminApolloClient.generateNewToken({
    userId: user.user_id,
    tenantId: user.tenant_id,
  });
  
  const t = await remixI18next.getFixedT(user.language_preference);

  const lastAnswered = user.last_user_answer?.created_at;

  const isInactive = lastAnswered
    ? DateTime.fromISO(lastAnswered).toISODate()! <=
      DateTime.now().minus({ days: 7 }).toISODate()!
    : false;

  const domain = getOriginFromRequest(request)

  console.log('EMAIL', JSON.stringify(user, null, 2))

  if (isInactive) {
    const nextQuestion =
      user?.next_question ??
      (await generateNextQuestionForUser(request, userId));

    invariant(nextQuestion, "Next question not found");

    const { questionItem, enrollmentTaxonomy } =
      await getQuestionData(nextQuestion);


    const response = await sendEmail(
      user?.email,
      t("emails.inactive.subject.come_back", {
        first_name: user.first_name,
      }),
      t("emails.inactive.subject.come_back", {
        first_name: user.first_name,
      }),
      <QuickcheckInactivityEmail
        questionItem={questionItem}
        enrollmentTaxonomy={enrollmentTaxonomy}
        token={activeToken}
        domain={domain}
        questionId={nextQuestion.id}
        t={t}
      />,
    );

    return {
      type: 'inactive',
      response
    }
  }

  if (user.user_question_activated_today) {
    const { questionItem, enrollmentTaxonomy } = await getQuestionData(
      user.user_question_activated_today,
    );

    const response = await sendEmail(
      user?.email,
      t("emails.question.subject.on_a_roll", {
        first_name: user.first_name,
        weeks: 5,
      }),
      t("emails.question.subject.on_a_roll", {
        first_name: user.first_name,
        weeks: 5,
      }),
      <QuickcheckQuestionEmail
        questionItem={questionItem}
        enrollmentTaxonomy={enrollmentTaxonomy}
        token={activeToken}
        domain={domain}
        questionId={user.user_question_activated_today.id}
        t={t}
        userData={user}
      />,
    );

    return {
      type: 'active',
      response
    }
  }

  return {
    type: 'no_email'
  }
};
