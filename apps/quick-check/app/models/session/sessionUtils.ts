import { redirect, type Session } from "@remix-run/node";

import { invariant, type Expand } from "quickcheck-shared";

import {
  SessionKeys,
  sessionStorage,
  type SessionData,
  type SessionFlashData,
} from "./sessionStorage";

/**
 * Session Creation
 */

export type BaseSession = {
  remember: boolean;
  redirectTo: string;
};

export type CreatedSession = BaseSession & {
  request: Request;
};

type CreateSessionProps = Expand<
  BaseSession & {
    session: Session<SessionData, SessionFlashData>;
  }
>;

export async function createSession({
  session,
  remember,
  redirectTo,
}: CreateSessionProps) {
  const setCookieHeader = await sessionStorage.commitSession(session, {
    maxAge: remember
      ? 60 * 60 * 24 // 1 day
      : undefined,
  });

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": setCookieHeader,
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

export async function updateSessionNow(
  request: Request,
  redirectTo: string,
  now: string,
) {
  const session = await getSession(request);
  session.set(SessionKeys.NOW, now);

  const userId = session.get(SessionKeys.USER_ID);
  invariant(userId, "No User in Session");

  const sendEmailPath = `/email/user/${userId}?redirectTo=${redirectTo}`;

  return createSession({
    session,
    redirectTo: sendEmailPath,
    remember: true,
  });
}

export async function getDeleteCookieHeaders(request: Request) {
  const session = await getSession(request);

  return {
    "Set-Cookie": await sessionStorage.destroySession(session),
  };
}

export async function logout(request: Request) {
  return redirect("/", {
    headers: await getDeleteCookieHeaders(request),
  });
}
