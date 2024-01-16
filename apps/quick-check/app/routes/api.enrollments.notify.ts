import { json, type LoaderFunctionArgs } from "@remix-run/node";

import { DateTime } from "luxon";

import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { sendEmailTemplate } from "~/utils/email/sendEmailTemplate.server";

export const config = {
  maxDuration: 300,
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);
    const enrollments = await adminApolloClient.getNotificationEnrollments();

    invariant(enrollments, "Error fetching enrollments");

    const enrollmentEmails = enrollments.map(
      async (enrollment) =>
        await sendEmailTemplate(
          request,
          enrollment.user_id,
          DateTime.now().toISODate(),
          {
            type: "Enrollment",
            data: { enrollment },
          },
        ),
    );

    await Promise.all(enrollmentEmails);

    return json({ enrollments });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
