import { json, type ActionArgs } from "@remix-run/node";

import invariant from "tiny-invariant";

import { simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { getLoginUrl } from "~/utils/urls";

import { getUserSchema, verifyImportRequest } from "~/models/api";

export const action = async ({ request }: ActionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);

    verifyImportRequest(request);

    const body = await request.json();

    const userData = getUserSchema.parse(body);
    const user = await adminApolloClient.getUser(userData);

    invariant(user, `User not found for id: ${userData.userId}`);

    const token =
      user.active_tokens[0] ||
      (await adminApolloClient.generateNewToken({
        userId: user?.user_id,
        tenantId: user?.tenant_id,
      }));
    invariant(token, `Could not generate token for user: ${user.user_id}`);

    const response = {
      id: user.user_id,
      token: token.id,
      loginUrl: getLoginUrl(token.id),
      questionsAvailable: 0, //TODO: find the user's unanswered question count
    };

    return json(response);
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
