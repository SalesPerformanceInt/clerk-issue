import {
  getAdminApolloClientFromRequest,
  type EventInput,
  type Events,
} from "~/graphql";

/**
 * Enrollment Event Input
 */

type EnrollmentEvents = Pick<
  Events,
  | "EnrollmentAdded"
  | "EnrollmentDeleted"
  | "EnrollmentReset"
  | "EnrollmentUpdated"
  | "EnrollmentRejected"
  | "EnrollmentIgnored"
>;

type PartialEnrollmentEvents = {
  [K in keyof EnrollmentEvents]: Omit<
    EnrollmentEvents[K],
    "enrollment_id" | "user_id" | "taxonomy_id"
  >;
};

type EnrollmentEventInput = EventInput<PartialEnrollmentEvents>;

/**
 * Curry Enrollment Event
 */

type CurryEnrollmentEventProps = {
  request: Request;
  enrollment_id: string;
  user_id: string;
  taxonomy_id: string;
  tenant_id: string;
};

export const curryEnrollmentEvent =
  (curriedData: CurryEnrollmentEventProps) =>
  async <Input extends EnrollmentEventInput>(enrollmentInput: Input) => {
    const { request, tenant_id, ...baseEventData } = curriedData;

    const adminApolloClient = await getAdminApolloClientFromRequest(request);

    const partialEnrollmentData =
      "data" in enrollmentInput ? enrollmentInput.data : {};

    const enrollmentEventData = {
      ...enrollmentInput,
      data: {
        ...baseEventData,
        ...partialEnrollmentData,
      },
    };

    adminApolloClient.createEvent(enrollmentEventData, {
      userId: curriedData.user_id,
      tenantId: tenant_id,
    });
  };

/**
 * Log Enrollment Event
 */

type LogEnrollmentEventFn = ReturnType<typeof curryEnrollmentEvent>;
export type LogEnrollmentEvent = {
  logEnrollmentEvent: LogEnrollmentEventFn;
};
