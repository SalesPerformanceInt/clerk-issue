import type { ReactElement } from "react";

import { render } from "emails";
import { ServerClient } from "postmark";

import { EMAIL_FROM, POSTMARK_API_KEY } from "../../envs.server";

const postmarkClient = new ServerClient(POSTMARK_API_KEY);

export const sendEmail = async (
  To: string,
  Subject: string,
  email: ReactElement,
) => {
  postmarkClient.sendEmail({
    From: EMAIL_FROM,
    To,
    Subject,
    HtmlBody: render(email),
    TextBody: "TODO: Need a simple link to the login with token here!",
    MessageStream: "outbound",
  });

  return true;
};
