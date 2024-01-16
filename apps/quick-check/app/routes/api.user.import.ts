import { json, type ActionFunctionArgs } from "@remix-run/node";

import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { formatUserInputFromImport, importUserSchema } from "~/models/api";

export const config = {
  maxDuration: 300,
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);

    const body = await request.json();

    const importUserData = importUserSchema.parse(body);
    const [userInputData, proxyData] =
      formatUserInputFromImport(importUserData);

    const user = await adminApolloClient.upsertUser(userInputData, proxyData);

    return json({ user });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
