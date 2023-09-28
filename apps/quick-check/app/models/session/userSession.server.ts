import { redirect } from "@remix-run/node";

import { DateTime } from "luxon";

import type { Expand } from "quickcheck-shared";

import type { User } from "~/graphql";

import { getUserFromRequest } from "~/models/user";

import { SessionKeys, type SessionData } from "./sessionStorage";
import {
  createSession,
  getSession,
  logout,
  type CreatedSession,
} from "./sessionUtils";

/**
 * User Session Typings
 */

type UserSession = Expand<CreatedSession & SessionData>;

type UserSessionData = [
  User["user_id"] | undefined,
  User["tenant_id"] | undefined,
  string,
];

/**
 * User Session Helpers
 */

export async function getUserDataFromFromSession(
  request: Request,
): Promise<UserSessionData> {
  const session = await getSession(request);

  const userId = session.get(SessionKeys.USER_ID);
  const tenantId = session.get(SessionKeys.TENANT_ID);
  const now = session.get(SessionKeys.NOW) ?? DateTime.now().toISO()!;

  return [userId, tenantId, now];
}

/**
 * User Session Getters
 */

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

/**
 * User Session Setters
 */

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
