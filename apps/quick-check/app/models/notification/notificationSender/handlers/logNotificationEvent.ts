import {
  getAdminApolloClientFromRequest,
  type GetUserEmailData,
} from "~/graphql";

import type { sendNotificationWorkflow } from "./sendNotificationWorkflow";

/**
 * Log Notification Event
 */

type LogNotificationEventProps = {
  request: Request;
  user: GetUserEmailData;
  token: string;
  notificationLog: Awaited<ReturnType<typeof sendNotificationWorkflow>>;
};

export const logNotificationEvent = async ({
  request,
  user,
  token,
  notificationLog,
}: LogNotificationEventProps) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  await adminApolloClient.createEvent(
    {
      type: "NotificationSent",
      data: {
        token,
        channel: "email",
        ...notificationLog,
      },
    },
    { userId: user.user_id, tenantId: user.tenant_id },
  );
};
