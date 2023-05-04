import dotenv from "dotenv";

dotenv.config();

export const QC_CONTENTSTACK_DELIVERY_TOKEN =
  process.env.QC_CONTENTSTACK_DELIVERY_TOKEN ?? "";
export const QC_CONTENTSTACK_STACK_KEY =
  process.env.QC_CONTENTSTACK_STACK_KEY ?? "";
export const CS_API_HOST = process.env.CS_API_HOST ?? "";
export const QC_CONTENTSTACK_ENVIRONMENT =
  process.env.QC_CONTENTSTACK_ENVIRONMENT ?? "";
export const SCHEMA_URL = `${CS_API_HOST}/stacks/${QC_CONTENTSTACK_STACK_KEY}?environment=${QC_CONTENTSTACK_ENVIRONMENT}`;
