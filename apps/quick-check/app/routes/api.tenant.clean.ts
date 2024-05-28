import { json, type ActionFunctionArgs } from "@vercel/remix";

import { simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { verifyApiRequest } from "~/models/api";

export const config = {
  maxDuration: 300,
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);

    verifyApiRequest(request);

    const result = await adminApolloClient.cleanTestTenants();

    return json(result);
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
