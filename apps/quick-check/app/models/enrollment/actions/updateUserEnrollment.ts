import { getAdminApolloClientFromRequest } from "~/graphql";

import type { EnrollmentActionFn } from "../enrollment.types";
import {
  prepareEnrollmentError,
  prepareEnrollmentResponse,
} from "../handlers/prepareEnrollmentResponse";

/**
 * Update UserEnrollment
 */

export const updateUserEnrollment: EnrollmentActionFn = async ({
  request,
  enrollmentNewData,
  currentEnrollment,
  logEnrollmentEvent,
}) => {
  const enrollmentErrorResponse = prepareEnrollmentError();

  if (!currentEnrollment) return enrollmentErrorResponse;

  const adminApolloClient = await getAdminApolloClientFromRequest(request);
  const updatedEnrollment = await adminApolloClient.updateUserEnrollment(
    enrollmentNewData.enrollment_id,
    { set: { expiration_date: enrollmentNewData.expiration_date } },
  );

  if (!updatedEnrollment) return enrollmentErrorResponse;

  await logEnrollmentEvent({
    type: "EnrollmentUpdated",
    data: {
      previous_expiration_date: currentEnrollment.expiration_date ?? null,
      new_expiration_date: enrollmentNewData.expiration_date,
    },
  });

  return prepareEnrollmentResponse({ status: 200 });
};
