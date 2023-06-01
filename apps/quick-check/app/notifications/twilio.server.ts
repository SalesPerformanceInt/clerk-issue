import { first } from "remeda";
import invariant from "tiny-invariant";
import twilio from "twilio";
import {
  apolloClient,
  type BaseUserFragment,
  type UserWithActiveTokenFragment,
} from "~/graphql";

import {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_SMS_FROM,
  TWILIO_WHATSAPP_FROM,
} from "~/utils/server/envs.server";

const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const shouldWeNotify = (user: BaseUserFragment | null) =>
  user?.sms_enabled === true;

const whichFrom = (phoneNumber: string) =>
  phoneNumber?.substring(0, 8) === "whatsapp"
    ? TWILIO_WHATSAPP_FROM
    : TWILIO_SMS_FROM;

export const sendTwilioMessage = async (
  user: BaseUserFragment,
  message: string,
) => {
  if (!shouldWeNotify(user)) return null;

  const phoneNumber = user?.phone_number;

  invariant(phoneNumber, "Missing phone number");

  return await twilioClient.messages.create({
    body: message,
    from: whichFrom(phoneNumber),
    to: phoneNumber,
  });
};

const generateTokenMessage = (
  user: UserWithActiveTokenFragment,
  origin: string,
) => {
  const activeToken = first(user.active_tokens);

  invariant(activeToken, "No active token");

  const message = `Hey there ${user.first_name}, your next question is available at ${origin}/t/${activeToken.id}`;
  return message;
};

export const generateTokenAndSendSMS = async (
  user: UserWithActiveTokenFragment,
  request: Request,
) => {
  const token = await apolloClient.generateNewToken(user.user_id);
  const { origin } = new URL(request.url);
  const message = generateTokenMessage(user, origin);
  await sendTwilioMessage(user, message);
  return token;
};
