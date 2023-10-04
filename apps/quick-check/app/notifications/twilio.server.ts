import invariant from "tiny-invariant";
import twilio from "twilio";

import {
  getAdminApolloClient,
  type BaseUserFragment,
  type UserWithActiveTokenFragment,
} from "~/graphql";

import {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_SMS_FROM,
  TWILIO_WHATSAPP_FROM,
} from "~/utils/envs.server";

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
  token: string,
  origin: string,
) => {
  const message = `Hey there ${user.first_name}, your next question is available at ${origin}/token/${token}`;
  return message;
};

export const generateTokenAndSendSMS = async (
  user: UserWithActiveTokenFragment,
  request: Request,
) => {
  const token = await getAdminApolloClient().generateNewToken(user.user_id);
  invariant(token, "No token generated");

  const { origin } = new URL(request.url);
  const message = generateTokenMessage(user, token.id, origin);
  await sendTwilioMessage(user, message);
  return token;
};
