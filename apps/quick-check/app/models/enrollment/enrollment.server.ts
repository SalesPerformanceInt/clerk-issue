import { getAdminApolloClientFromRequest } from "~/graphql";

import { getEnrollmentAction } from "./handlers/getEnrollmentAction";
import { createLogEnrollmentEvent } from "./handlers/logEnrollmentEvent";

import type {
  EnrollmentActionProps,
  EnrollmentActionResponse,
} from "./enrollment.types";

/**
 * Handle UserEnrollment
 */

type HandleUserEnrollmentProps = Omit<
  EnrollmentActionProps,
  "enrollmentNewData"
> & {
  enrollmentNewData: Omit<
    EnrollmentActionProps["enrollmentNewData"],
    "user_id" | "topic_id"
  >;
};

export const handleUserEnrollment = async ({
  enrollmentNewData: _enrollmentNewData,
  ...props
}: HandleUserEnrollmentProps): Promise<EnrollmentActionResponse> => {
  const { request, user, taxonomyId } = props;

  const enrollmentNewData: EnrollmentActionProps["enrollmentNewData"] = {
    ..._enrollmentNewData,
    user_id: user.userId,
    topic_id: taxonomyId,
  };

  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const currentEnrollment = await adminApolloClient.getUserEnrollment(
    enrollmentNewData.enrollment_id,
  );

  const logEnrollmentEvent = createLogEnrollmentEvent({
    request,
    enrollment_id: enrollmentNewData.enrollment_id,
    user_id: user.userId,
    tenant_id: user.tenantId,
    taxonomy_id: taxonomyId,
  });

  const { enrollmentActionFn, enrollmentResponseMessage } = getEnrollmentAction(
    {
      enrollmentNewData,
      currentEnrollment,
    },
  );

  const enrollmentActionResponse = await enrollmentActionFn({
    ...props,
    enrollmentNewData,
    currentEnrollment,
    logEnrollmentEvent,
    enrollmentResponseMessage,
  });

  return {
    ...enrollmentActionResponse,
    user_id: user.userId,
    enrollment_id: enrollmentNewData.enrollment_id,
  };
};
