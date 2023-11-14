import { VERCEL_URL } from "./envs.server";

export const getLoginUrl = (token: string) => {
  return `${VERCEL_URL}/token/${token}`;
};
