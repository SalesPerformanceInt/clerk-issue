import { redirect, type Session } from "@remix-run/node";

import type { Expand } from "quickcheck-shared";

import { sendEmailTemplate } from "~/utils/email/sendEmailTemplate.server";

import {
  SessionKeys,
  sessionStorage,
  type SessionData,
  type SessionFlashData,
} from "./sessionStorage";
import { getUserDataFromSession } from "./userSession.server";

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

export async function updateSessionNow(
  request: Request,
  redirectTo: string,
  now: string,
) {
  const session = await getSession(request);

  session.set(SessionKeys.NOW, now);

  const userId = session.get(SessionKeys.USER_ID);

  if (userId) {
    await sendEmailTemplate(request, userId, now);
  }

  return createSession({
    session,
    redirectTo,
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
