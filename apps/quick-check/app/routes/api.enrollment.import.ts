import { json, type ActionArgs } from "@remix-run/node";

import invariant from "tiny-invariant";

import { getAdminApolloClientFromRequest } from "~/graphql";

import {
  formatUserInputFromImport,
  inputEnrollmentSchema,
  verifyImportRequest,
} from "~/models/api";

export const action = async ({ request }: ActionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);

    verifyImportRequest(request);

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

    const enrollment = await adminApolloClient.enrollUser(
      cms_topic_id,
      enrollmentData,
      { userId: user?.user_id },
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
    return json({ error }, { status: 500 });
  }
};
