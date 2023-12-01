import invariant from "tiny-invariant";

import { getAdminApolloClientFromRequest } from "~/graphql";

type GetUserActiveTokenUserArgs = {
  userId: string;
  tenantId: string;
};

export const getUserActiveToken = async (
  request: Request,
  { userId, tenantId }: GetUserActiveTokenUserArgs,
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
