import { json, type ActionFunctionArgs } from "@remix-run/node";

import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import {
  formatUserInputFromImport,
  importUserSchema,
  verifyApiRequest,
} from "~/models/api";

export const config = {
  maxDuration: 300,
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);

    verifyApiRequest(request);

    const body = await request.json();

    const importUserData = importUserSchema.parse(body);

    const [userInputData, proxyData] =
      formatUserInputFromImport(importUserData);

    const user = await adminApolloClient.upsertUser(userInputData, proxyData);

    invariant(user, "User not found for update");

    return json({ user_id: user.user_id }, { status: 200 });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
