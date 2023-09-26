import { createCookieSessionStorage, redirect } from "@remix-run/node";

import { DateTime } from "luxon";
import invariant from "tiny-invariant";

import type { User } from "~/graphql";

import { SESSION_SECRET } from "~/utils/envs.server";

import { getUserFromRequest } from "~/models/user";

invariant(SESSION_SECRET, "SESSION_SECRET must be set");

/**
 * Session Definition
 */

enum SessionKeys {
  USER_ID = "userId",
  TENANT_ID = "tenantId",
  NOW = "now",
}

type SessionData = Record<SessionKeys, string>;
type SessionFlashData = { error: string };

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

/**
 * Session Utils
 */

type Session = {
  request: Request;
  remember: boolean;
  redirectTo: string;
};

type UserSession = Session & SessionData;
type AdminSession = Session & Partial<Pick<SessionData, SessionKeys.NOW>>;

export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");

  return sessionStorage.getSession(cookie);
}

export async function logout(request: Request) {
  const session = await getSession(request);

  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

/**
 * User Session
 */

export async function getUserDataFromFromSession(
  request: Request,
): Promise<[User["user_id"] | undefined, User["tenant_id"] | undefined]> {
  const session = await getSession(request);

  const userId = session.get(SessionKeys.USER_ID);
  const tenantId = session.get(SessionKeys.TENANT_ID);

  return [userId, tenantId];
}

export async function requireUserSession(
  request: Request,
  redirectTo: string = new URL(request.url).pathname,
): Promise<[string, string]> {
  const [userId, tenantId] = await getUserDataFromFromSession(request);

  if (!userId || !tenantId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);

    throw redirect(`/?${searchParams.toString()}`);
  }

  return [userId, tenantId];
}

export async function requireUser(request: Request) {
  await requireUserSession(request);

  const user = await getUserFromRequest(request);
  if (user) return user;

  throw await logout(request);
}

export async function createUserSession({
  request,
  userId,
  tenantId,
  remember,
  redirectTo,
}: UserSession) {
  const session = await getSession(request);

  session.set(SessionKeys.USER_ID, userId);
  session.set(SessionKeys.TENANT_ID, tenantId);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember
          ? 60 * 60 * 24 // 1 day
          : undefined,
      }),
    },
  });
}

/**
 * Admin Session
 */

export async function getAdminDataFromFromSession(request: Request) {
  const session = await getSession(request);

  const now = session.get(SessionKeys.NOW) ?? DateTime.now().toISO()!;

  return now;
}

export async function requireAdminSession(request: Request): Promise<[string]> {
  const now = await getAdminDataFromFromSession(request);

  return [now];
}

export async function createAdminSession({
  request,
  remember,
  redirectTo,
  now,
}: AdminSession) {
  const session = await getSession(request);

  session.set(SessionKeys.NOW, now ?? "");

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember
          ? 60 * 60 * 24 // 1 day
          : undefined,
      }),
    },
  });
}
