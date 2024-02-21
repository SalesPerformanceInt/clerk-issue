import { getAdminApolloClientFromRequest } from "~/graphql";

import type { EnrollmentActionFn } from "../enrollment.types";
import {
  prepareEnrollmentError,
  prepareEnrollmentResponse,
} from "../handlers/prepareEnrollmentResponse";

import { syncUserEnrollment } from "./syncUserEnrollment";

/**
 * Reset UserEnrollment
 */

export const resetUserEnrollment: EnrollmentActionFn = async ({
  request,
  user,
  enrollmentNewData,
  taxonomyId,
  currentEnrollment,
  logEnrollmentEvent,
}) => {
  const enrollmentErrorResponse = prepareEnrollmentError();

  if (!currentEnrollment) return enrollmentErrorResponse;
  if (!enrollmentNewData.start_date) return enrollmentErrorResponse;

  const adminApolloClient = await getAdminApolloClientFromRequest(request);
  const resetEnrollment = await adminApolloClient.resetUserEnrollment(
    enrollmentNewData.enrollment_id,
  );

  if (!resetEnrollment) return enrollmentErrorResponse;

  logEnrollmentEvent({
    type: "EnrollmentReset",
    data: {
      previous_start_date: currentEnrollment.start_date,
      new_start_date: enrollmentNewData.start_date,
      previous_expiration_date: currentEnrollment.expiration_date ?? null,
      new_expiration_date: enrollmentNewData.expiration_date,
    },
  });

  await syncUserEnrollment({
    request,
    user,
    enrollmentNewData,
    taxonomyId,
    logEnrollmentEvent,
  });

  return prepareEnrollmentResponse({ status: 202 });
};
