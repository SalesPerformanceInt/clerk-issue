import type { ReactElement } from "react";

import { render } from "emails";
import { ServerClient } from "postmark";

import { EMAIL_FROM, POSTMARK_API_KEY } from "../../envs.server";

const postmarkClient = new ServerClient(POSTMARK_API_KEY);

export type SendEmailArgs = {
  To: string;
  Subject: string;
  TextBody: string;
  HtmlBody: string;
};

export const sendEmail = async (sendEmailArgs: SendEmailArgs) => {
  const response = await postmarkClient.sendEmail({
    From: EMAIL_FROM,
    MessageStream: "outbound",
    ...sendEmailArgs,
  });

  return response;
};
