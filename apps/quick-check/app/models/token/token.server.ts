import { invariant } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { BasicUserData } from "~/models/user";

export const getUserActiveToken = async (
  request: Request,
  { userId, tenantId }: BasicUserData,
) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const userLastActiveToken = await adminApolloClient.getUserLastActiveToken({
    userId,
  });

  const activeToken =
    userLastActiveToken ||
    (await adminApolloClient.generateNewToken({
      userId,
      tenantId,
    }));

  invariant(activeToken, `Could not generate token for user: ${userId}`);

  return activeToken;
};
