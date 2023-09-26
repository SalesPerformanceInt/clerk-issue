import {
  createCookieSessionStorage,
  redirect,
  type Session,
} from "@remix-run/node";

import { DateTime } from "luxon";
import invariant from "tiny-invariant";

import type { Expand } from "quickcheck-shared";

import { SESSION_SECRET } from "~/utils/envs.server";

import { getUserFromRequest } from "~/models/user";

import type { User } from "./graphql";

invariant(SESSION_SECRET, "SESSION_SECRET must be set");

/**
 * Session Definition
 */

enum SessionKeys {
  USER_ID = "userId",
  TENANT_ID = "tenantId",
  NOW = "now",
}

type SessionData = {
  [SessionKeys.USER_ID]: string;
  [SessionKeys.TENANT_ID]: string;
  [SessionKeys.NOW]?: string;
};
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
 * Session Creation
 */

type BaseSession = {
  remember: boolean;
  redirectTo: string;
};

type CreatedSession = BaseSession & {
  request: Request;
};

type UserSession = Expand<CreatedSession & SessionData>;
type AdminSession = Expand<CreatedSession & Pick<SessionData, SessionKeys.NOW>>;

type CreateSessionProps = Expand<
  BaseSession & {
    session: Session<SessionData, SessionFlashData>;
  }
>;

async function createSession({
  session,
  remember,
  redirectTo,
}: CreateSessionProps) {
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
 * Session Utils
 */

export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");

  return sessionStorage.getSession(cookie);
}

export async function updateSessionNow(request: Request, now: string) {
  const session = await getSession(request);

  session.set(SessionKeys.NOW, now);

  return createSession({
    session,
    remember: true,
    redirectTo: new URL(request.url).pathname,
  });
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

type UserSessionData = [
  User["user_id"] | undefined,
  User["tenant_id"] | undefined,
  string,
];

export async function getUserDataFromFromSession(
  request: Request,
): Promise<UserSessionData> {
  const session = await getSession(request);

  const userId = session.get(SessionKeys.USER_ID);
  const tenantId = session.get(SessionKeys.TENANT_ID);
  const now = session.get(SessionKeys.NOW) ?? DateTime.now().toISO()!;

  return [userId, tenantId, now];
}

export async function requireUserSession(
  request: Request,
  redirectTo: string = new URL(request.url).pathname,
): Promise<Required<UserSessionData>> {
  const [userId, tenantId, now] = await getUserDataFromFromSession(request);

  if (!userId || !tenantId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);

    throw redirect(`/?${searchParams.toString()}`);
  }

  return [userId, tenantId, now];
}

export async function requireUser(request: Request) {
  await requireUserSession(request);

  const user = await getUserFromRequest(request);
  if (user) return user;

  throw await logout(request);
}

export async function createUserSession({
  request,
  remember,
  redirectTo,
  userId,
  tenantId,
  now,
}: UserSession) {
  const session = await getSession(request);

  session.set(SessionKeys.USER_ID, userId);
  session.set(SessionKeys.TENANT_ID, tenantId);
  session.set(SessionKeys.NOW, now);

  return createSession({
    session,
    remember,
    redirectTo,
  });
}

/**
 * Admin Session
 */

type AdminSessionData = [string];

export async function getAdminDataFromFromSession(
  request: Request,
): Promise<AdminSessionData> {
  const session = await getSession(request);

  const now = session.get(SessionKeys.NOW) ?? DateTime.now().toISO()!;

  return [now];
}

export async function requireAdminSession(
  request: Request,
): Promise<AdminSessionData> {
  const [now] = await getAdminDataFromFromSession(request);

  return [now];
}

export async function createAdminSession({
  request,
  remember,
  redirectTo,
  now,
}: AdminSession) {
  const session = await getSession(request);

  session.set(SessionKeys.NOW, now);

  return createSession({
    session,
    remember,
    redirectTo,
  });
}
