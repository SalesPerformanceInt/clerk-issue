import type { ReactElement } from "react";

import { SES } from "@aws-sdk/client-ses";
import sendgrid from "@sendgrid/mail";
import { render } from "emails";

import { AWS_SES_REGION, EMAIL_FROM } from "../../envs.server";

const ses = new SES({ region: AWS_SES_REGION });

export const sendEmail = async (
  to: string,
  subject: string,
  email: ReactElement,
) => {
  const params = {
    Source: EMAIL_FROM,
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: render(email),
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
  };

  return await ses.sendEmail(params);
};
