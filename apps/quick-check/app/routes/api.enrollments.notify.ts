import { json, type LoaderFunctionArgs } from "@remix-run/node";

import { DateTime } from "luxon";

import { simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { sendEmailTemplate } from "~/utils/email/sendEmailTemplate.server";

import { completeEnrollmentAndNotify } from "~/models/enrollment/actions/completeEnrollmentAndNotify";

export const config = {
  maxDuration: 300,
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);
    const { newEnrollments, completedEnrollments } =
      await adminApolloClient.getNotificationEnrollments();

    const enrollmentEmails =
      newEnrollments?.map(
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
      ) ?? [];

    const completedEnrollmentEmails =
      completedEnrollments?.map(async (enrollment) =>
        completeEnrollmentAndNotify(request, enrollment),
      ) ?? [];

    await Promise.all([...enrollmentEmails, ...completedEnrollmentEmails]);

    return json({ newEnrollments, completedEnrollments });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
