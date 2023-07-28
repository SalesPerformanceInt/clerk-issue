import { createCookieSessionStorage, redirect } from "@remix-run/node";

import invariant from "tiny-invariant";
import type { User } from "~/graphql";

import { SESSION_SECRET } from "~/utils/envs.server";

import { getUserFromRequest } from "~/models/user";

invariant(SESSION_SECRET, "SESSION_SECRET must be set");

type SessionData = {
  userId: string;
  tenantId: string;
};

type SessionFlashData = {
  error: string;
};

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

const USER_ID_SESSION_KEY = "userId";
const TENANT_ID_SESSION_KEY = "tenantId";

export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export async function getUserDataFromFromSession(
  request: Request,
): Promise<[User["user_id"] | undefined, User["tenant_id"] | undefined]> {
  const session = await getSession(request);
  const userId = session.get(USER_ID_SESSION_KEY);
  const tenantId = session.get(TENANT_ID_SESSION_KEY);
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
}: {
  request: Request;
  userId: string;
  tenantId: string;
  remember: boolean;
  redirectTo: string;
}) {
  const session = await getSession(request);

  session.set(USER_ID_SESSION_KEY, userId);
  session.set(TENANT_ID_SESSION_KEY, tenantId);

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

export async function logout(request: Request) {
  const session = await getSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}
