import { waitUntil } from "@vercel/functions";

import { getAdminApolloClientFromRequest } from "~/graphql";

import type { EnrollmentActionFn } from "../enrollment.types";
import {
  prepareEnrollmentError,
  prepareEnrollmentResponse,
} from "../handlers/prepareEnrollmentResponse";

import { notifyUserEnrollment } from "./notifyUserEnrollment";

/**
 * Sync UserEnrollment
 */

export const syncUserEnrollment: EnrollmentActionFn = async ({
  request,
  user,
  enrollmentNewData: { start_date, ...enrollmentNewData },
  taxonomyId,
  logEnrollmentEvent,
}) => {
  const enrollmentErrorResponse = prepareEnrollmentError();

  if (!start_date) return enrollmentErrorResponse;

  const adminApolloClient = await getAdminApolloClientFromRequest(request);
  const syncedEnrollment = await adminApolloClient.syncUserEnrollment(
    taxonomyId,
    { start_date, ...enrollmentNewData },
    user,
  );

  if (!syncedEnrollment) return enrollmentErrorResponse;

  waitUntil(
    Promise.all([
      logEnrollmentEvent({ type: "EnrollmentAdded" }),
      notifyUserEnrollment({ request, user, enrollment: syncedEnrollment }),
    ]),
  );

  return prepareEnrollmentResponse({ status: 201 });
};
