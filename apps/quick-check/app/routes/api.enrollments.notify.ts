import { json, type LoaderArgs } from "@remix-run/node";

import invariant from "tiny-invariant";

import { simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { sendEnrollmentEmail } from "~/utils/email/sendEnrollmentEmail";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);
    const enrollments = await adminApolloClient.getNotificationEnrollments();

    invariant(enrollments, "Error fetching enrollments");

    const enrollmentEmails = enrollments.map(
      async (enrollment) => await sendEnrollmentEmail(enrollment, request),
    );

    await Promise.all(enrollmentEmails);

    return json({ enrollments });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
