import { redirect, type Session } from "@remix-run/node";

import type { Expand } from "quickcheck-shared";

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
