import { QuickcheckBasicEmail, render } from "emails";

import { sendEmail } from "~/utils/email/postmark/email";

import type { EmailTemplatesFn } from "../emailTemplatesMap";

export const sendUserRequestedLinkEmailTemplate: EmailTemplatesFn = async (
  _request,
  { user, t, loginUrl },
) => {
  const text = loginUrl;

  const emailResponse = await sendEmail({
    To: user.email,
    Subject: t("emails.requested_link.subject"),
    TextBody: text,
    HtmlBody: render(
      <QuickcheckBasicEmail
        t={t}
        greetingsText={t("emails.requested_link.greeting", {
          first_name: user.first_name,
        })}
        bodyText={t("emails.requested_link.body")}
        button={{
          url: loginUrl,
          text: t("emails.requested_link.button"),
        }}
      />,
    ),
  });

  return {
    type: "RequestedLink",
    emailResponse,
    text,
  };
};
