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

  const activeToken = user.active_tokens[0]?.id ?? "";

  const t = await remixI18next.getFixedT(user.language_preference);

  const lastAnswered = user.last_user_answer?.created_at;

  const isInactive = lastAnswered
    ? DateTime.fromISO(lastAnswered).toISODate()! <=
      DateTime.now().minus({ days: 7 }).toISODate()!
    : false;

  if (isInactive) {
    const nextQuestion =
      user?.next_question ??
      (await generateNextQuestionForUser(request, userId));

    invariant(nextQuestion, "Next question not found");

    const { questionItem, enrollmentTaxonomy } =
      await getQuestionData(nextQuestion);

    const origin = getOriginFromRequest(request)

    return await sendEmail(
      user?.email,
      t("emails.inactive.subject.come_back", {
        first_name: user.first_name,
      }),
      <QuickcheckInactivityEmail
        questionItem={questionItem}
        enrollmentTaxonomy={enrollmentTaxonomy}
        token={activeToken}
        domain={origin}
        questionId={nextQuestion.id}
        t={t}
      />,
    );
  }

  if (user.user_question_activated_today) {
    const { questionItem, enrollmentTaxonomy } = await getQuestionData(
      user.user_question_activated_today,
    );

    return await sendEmail(
      user?.email,
      t("emails.question.subject.on_a_roll", {
        first_name: user.first_name,
        weeks: 5,
      }),
      <QuickcheckQuestionEmail
        questionItem={questionItem}
        enrollmentTaxonomy={enrollmentTaxonomy}
        token={activeToken}
        domain={origin}
        questionId={user.user_question_activated_today.id}
        t={t}
        userData={user}
      />,
    );
  }
};
