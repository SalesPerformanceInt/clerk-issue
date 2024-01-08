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

    const result = await adminApolloClient.cleanTestTenants();

    return json(result);
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
