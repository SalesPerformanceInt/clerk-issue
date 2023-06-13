import { createCookieSessionStorage, redirect } from "@remix-run/node";

import invariant from "tiny-invariant";
import type { User } from "~/graphql";

import { SESSION_SECRET } from "~/utils/envs.server";

import { getUserById } from "~/models/user";

invariant(SESSION_SECRET, "SESSION_SECRET must be set");

type SessionData = {
  userId: string;
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

const USER_SESSION_KEY = "userId";

export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export async function getUserIdFromSession(
  request: Request,
): Promise<User["user_id"] | undefined> {
  const session = await getSession(request);
  const userId = session.get(USER_SESSION_KEY);
  return userId;
}

export async function getUserFromSession(request: Request) {
  const userId = await getUserIdFromSession(request);
  if (!userId) return null;

  const user = await getUserById(userId);
  return user;
}

export async function requireUserSession(
  request: Request,
  redirectTo: string = new URL(request.url).pathname,
) {
  const userId = await getUserIdFromSession(request);
  if (!userId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/?${searchParams.toString()}`);
  }
  return userId;
}

export async function requireUser(request: Request) {
  const userId = await requireUserSession(request);

  const user = await getUserById(userId);
  if (user) return user;

  throw await logout(request);
}

export async function createUserSession({
  request,
  userId,
  remember,
  redirectTo,
}: {
  request: Request;
  userId: string;
  remember: boolean;
  redirectTo: string;
}) {
  const session = await getSession(request);

  session.set(USER_SESSION_KEY, userId);

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
