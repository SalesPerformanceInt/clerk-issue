import { json, type ActionArgs } from "@remix-run/node";

import invariant from "tiny-invariant";

import { getAdminApolloClientFromRequest } from "~/graphql";

import {
  formatUserInputFromImport,
  inputEnrollmentSchema,
  verifyImportRequest,
} from "~/models/api";

export const action = async ({ request }: ActionArgs) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  verifyImportRequest(request);

  const body = await request.json();

  const importEnrollmentData = inputEnrollmentSchema.parse(body);

  const userInputData = formatUserInputFromImport(importEnrollmentData.user);
  const user = await adminApolloClient.upsertUser(userInputData);

  invariant(user, "User not found");

  const { enrollment_id, cms_topic_id } = importEnrollmentData;

  const enrollment = await adminApolloClient.enrollUser(
    cms_topic_id,
    enrollment_id,
    { userId: user?.user_id },
  );

  return json({ user, enrollment });
};
