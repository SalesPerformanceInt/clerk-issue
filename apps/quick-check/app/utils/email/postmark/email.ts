import type { ReactElement } from "react";

import { render } from "emails";
import { ServerClient } from "postmark";

import { EMAIL_FROM, POSTMARK_API_KEY } from "../../envs.server";

const postmarkClient = new ServerClient(POSTMARK_API_KEY);

export const sendEmail = async (
  To: string,
  Subject: string,
  text: string,
  email: ReactElement,
) => {
  const response = await postmarkClient.sendEmail({
    From: EMAIL_FROM,
    To,
    Subject,
    HtmlBody: render(email),
    TextBody: text,
    MessageStream: "outbound",
  });

  return response;
};
