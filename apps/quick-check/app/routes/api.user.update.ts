import { json, type ActionArgs } from "@remix-run/node";

import { invariant } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import {
  formatUserInputFromImport,
  importUserSchema,
  verifyApiRequest,
} from "~/models/api";

export const config = {
  maxDuration: 300,
};

export const action = async ({ request }: ActionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);

    verifyApiRequest(request);

    const body = await request.json();

    const importUserData = importUserSchema.parse(body);

    const userInputData = formatUserInputFromImport(importUserData);
    const user = await adminApolloClient.upsertUser(userInputData);

    invariant(user, "User not found for update");

    return json({ user_id: user.user_id }, { status: 201 });
  } catch (error) {
    return json({ error }, { status: 500 });
  }
};
