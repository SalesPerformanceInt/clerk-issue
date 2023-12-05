import { json, type ActionArgs } from "@remix-run/node";

import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { getUserSchema, verifyApiRequest } from "~/models/api";

export const config = {
  maxDuration: 300,
};

export const action = async ({ request }: ActionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);

    verifyApiRequest(request);

    const body = await request.json();

    const userData = getUserSchema.parse(body);
    const user = await adminApolloClient.getUser(userData);

    invariant(user, `User not found for id: ${userData.userId}`);

    await adminApolloClient.resetUser({ userId: user.user_id });

    const response = {
      id: user.user_id,
      reset: true,
    };

    return json(response);
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
