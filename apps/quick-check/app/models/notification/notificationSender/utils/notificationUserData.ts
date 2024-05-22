import { invariant } from "quickcheck-shared";

import {
  getAdminApolloClient,
  getAdminApolloClientFromRequest,
  type GetUserEmailData,
} from "~/graphql";

import { getLoginUrl } from "~/utils/urls";

import { getUserActiveToken } from "~/models/token";

/**
 * User Data
 */

export type GetUserDataFromEmailProps = {
  request: Request;
  userId: string;
  now?: string;
};

export const getUserDataFromEmail = async ({
  request,
  userId,
  now,
}: GetUserDataFromEmailProps) => {
  const adminApolloClient = now
    ? await getAdminApolloClient(now)
    : await getAdminApolloClientFromRequest(request);

  const user = await adminApolloClient.getUserEmailData({ userId });
  invariant(user, "No user found");

  return { request, user };
};

/**
 * Login Data
 */

export type GetLoginDataFromUserProps = {
  request: Request;
  user: GetUserEmailData;
};

export const getLoginDataFromUser = async ({
  request,
  user,
}: GetLoginDataFromUserProps) => {
  const token = (
    await getUserActiveToken(request, {
      userId: user.user_id,
      tenantId: user.tenant_id,
    })
  ).id;

  const loginUrl = getLoginUrl(token, request);

  return { user, token, loginUrl };
};
