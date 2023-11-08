import type { ReactElement } from "react";

import { SES } from "@aws-sdk/client-ses";
import sendgrid from "@sendgrid/mail";
import { render } from "emails";

import { SENDGRID_API_KEY, SENDGRID_FROM } from "../../envs.server";

sendgrid.setApiKey(SENDGRID_API_KEY);

export const sendEmail = async (
  to: string,
  subject: string,
  email: ReactElement,
) => {
  const html = render(email);
  const data = {
    to,
    from: SENDGRID_FROM,
    subject,
    html,
  };
  return await sendgrid.send(data);
};
