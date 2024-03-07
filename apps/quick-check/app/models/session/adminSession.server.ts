import { redirect } from "@remix-run/node";

import { DateTime } from "luxon";

import type { Expand } from "quickcheck-shared";

import { SessionKeys, type SessionData } from "./sessionStorage";
import { createSession, getSession, type CreatedSession } from "./sessionUtils";

/**
 * Admin Session Typings
 */

type AdminSession = Expand<
  CreatedSession & Pick<SessionData, SessionKeys.NOW | SessionKeys.ADMIN>
>;

type AdminSessionData = [string, boolean];

/**
 * Admin Session Helpers
 */

export async function getAdminDataFromFromSession(
  request: Request,
): Promise<AdminSessionData> {
  const session = await getSession(request);

  const now = session.get(SessionKeys.NOW) ?? DateTime.now().toISO()!;
  const admin = !!session.get(SessionKeys.ADMIN);

  return [now, admin];
}

export async function authAdminSession(request: Request) {
  const [_, admin] = await getAdminDataFromFromSession(request);

  const redirectTo = new URL(request.url).pathname;

  if (!admin) return redirect(`/admin/auth?redirectTo=${redirectTo}`);
}

/**
 * Admin Session Getters
 */

export async function requireAdminSession(
  request: Request,
): Promise<AdminSessionData> {
  const [now, admin] = await getAdminDataFromFromSession(request);

  return [now, admin];
}

/**
 * Admin Session Setters
 */

export async function createAdminSession({
  request,
  remember,
  redirectTo,
  now,
  admin,
}: AdminSession) {
  const session = await getSession(request);

  session.set(SessionKeys.NOW, now);

  admin && session.set(SessionKeys.ADMIN, admin);

  return createSession({
    session,
    remember,
    redirectTo,
  });
}
