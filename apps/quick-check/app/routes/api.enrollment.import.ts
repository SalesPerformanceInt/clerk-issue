import { json, type ActionArgs } from "@remix-run/node";

import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import {
  formatUserInputFromImport,
  inputEnrollmentSchema,
  verifyApiRequest,
} from "~/models/api";
import { enrollUser } from "~/models/enrollment";

export const config = {
  maxDuration: 300,
};

export const action = async ({ request }: ActionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);

    verifyApiRequest(request);

    const body = await request.json();

    const importEnrollmentData = inputEnrollmentSchema.parse(body);

    const userInputData = formatUserInputFromImport(importEnrollmentData.user);
    const user = await adminApolloClient.upsertUser(userInputData);

    invariant(user, "User not found");

    const {
      cms_topic_id,
      user: _enrollmentUser,
      ...enrollmentData
    } = importEnrollmentData;

    const enrollment = await enrollUser(
      { userId: user.user_id, tenantId: user.tenant_id },
      cms_topic_id,
      enrollmentData,
      request,
    );

    invariant(enrollment, "Enrollment not created");

    return json(
      {
        user_id: user.user_id,
        enrollment_id: enrollment.id,
      },
      { status: 201 },
    );
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
