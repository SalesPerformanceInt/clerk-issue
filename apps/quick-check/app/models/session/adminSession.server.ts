import { DateTime } from "luxon";

import type { Expand } from "quickcheck-shared";

import { SessionKeys, type SessionData } from "./sessionStorage";
import { createSession, getSession, type CreatedSession } from "./sessionUtils";

/**
 * Admin Session Typings
 */

type AdminSession = Expand<CreatedSession & Pick<SessionData, SessionKeys.NOW>>;

type AdminSessionData = [string];

/**
 * Admin Session Helpers
 */

export async function getAdminDataFromFromSession(
  request: Request,
): Promise<AdminSessionData> {
  const session = await getSession(request);

  const now = session.get(SessionKeys.NOW) ?? DateTime.now().toISO()!;

  return [now];
}

/**
 * Admin Session Getters
 */

export async function requireAdminSession(
  request: Request,
): Promise<AdminSessionData> {
  const [now] = await getAdminDataFromFromSession(request);

  return [now];
}

/**
 * Admin Session Setters
 */

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
