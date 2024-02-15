import { getAdminApolloClientFromRequest } from "~/graphql";

import { getEnrollmentAction } from "./handlers/getEnrollmentAction";

import type { EnrollmentActionFn } from "./enrollment";

/**
 * Handle UserEnrollment
 */

export const handleUserEnrollment: EnrollmentActionFn = async ({
  request,
  user,
  newEnrollmentData,
  taxonomyId,
}) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const currentEnrollment = await adminApolloClient.getUserEnrollment(
    newEnrollmentData.enrollment_id,
  );

  const enrollmentActionHandler = getEnrollmentAction({
    currentEnrollment,
    newEnrollmentData,
  });

  const enrollmentActionResponse = await enrollmentActionHandler({
    request,
    user,
    newEnrollmentData,
    taxonomyId,
    currentEnrollment,
  });

  return enrollmentActionResponse;
};
