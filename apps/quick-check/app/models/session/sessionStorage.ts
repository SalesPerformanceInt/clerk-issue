import { createCookieSessionStorage } from "@remix-run/node";

import { invariant } from "quickcheck-shared";

import { SESSION_SECRET } from "~/utils/envs.server";

invariant(SESSION_SECRET, "SESSION_SECRET must be set");

/**
 * Session Definition
 */

export enum SessionKeys {
  USER_ID = "userId",
  TENANT_ID = "tenantId",
  NOW = "now",
}

export type SessionData = {
  [SessionKeys.USER_ID]: string;
  [SessionKeys.TENANT_ID]: string;
  [SessionKeys.NOW]?: string;
};
export type SessionFlashData = { error: string };

export const sessionStorage = createCookieSessionStorage<
  SessionData,
  SessionFlashData
>({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});
