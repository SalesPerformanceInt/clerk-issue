export const QC_CONTENTSTACK_DELIVERY_TOKEN =
  process.env.QC_CONTENTSTACK_DELIVERY_TOKEN ?? "";

export const QC_CONTENTSTACK_STACK_KEY =
  process.env.QC_CONTENTSTACK_STACK_KEY ?? "";

export const QC_CONTENTSTACK_ENVIRONMENT =
  process.env.QC_CONTENTSTACK_ENVIRONMENT ?? "";

export const HASURA_AUTH_TOKEN = process.env.HASURA_AUTH_TOKEN ?? "";
export const HASURA_API_URL = process.env.HASURA_API_URL ?? "";
export const HASURA_SECRET_KEY = process.env.HASURA_SECRET_KEY ?? "";

export const SESSION_SECRET = process.env.SESSION_SECRET ?? "";

export const NODE_ENV = process.env.NODE_ENV ?? "";

export const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID ?? "";
export const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN ?? "";
export const TWILIO_SMS_FROM = process.env.TWILIO_SMS_FROM ?? "";
export const TWILIO_WHATSAPP_FROM = process.env.TWILIO_WHATSAPP_FROM ?? "";

export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY ?? "";
export const SENDGRID_FROM = process.env.SENDGRID_FROM ?? "";
export const VERCEL_URL = process.env.VERCEL_URL ?? "";

export const isDevelopment = NODE_ENV === "development";

export const CONTENTSTACK_ENVS = {
  QC_CONTENTSTACK_DELIVERY_TOKEN,
  QC_CONTENTSTACK_STACK_KEY,
  QC_CONTENTSTACK_ENVIRONMENT,
};

export type ContentStackEnvs = typeof CONTENTSTACK_ENVS;

declare global {
  interface Window {
    ENV: ContentStackEnvs;
  }
}
