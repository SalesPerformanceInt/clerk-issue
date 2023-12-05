import { json, type ActionArgs } from "@remix-run/node";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { formatUserInputFromImport, importUserSchema } from "~/models/api";

export const config = {
  maxDuration: 300,
};

export const action = async ({ request }: ActionArgs) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const body = await request.json();

  const importUserData = importUserSchema.parse(body);
  const userInputData = formatUserInputFromImport(importUserData);
  const user = await adminApolloClient.upsertUser(userInputData);

  return json({ user });
};
