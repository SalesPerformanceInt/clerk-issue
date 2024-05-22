import { startNotificationWorkflow } from "~/models/notification/notificationService";

import type {
  NotificationSharedData,
  NotificationTemplateData,
} from "../utils/notificationData";
import type { NotificationTemplate } from "../utils/notificationTemplates.types";

/**
 * Send Notification Workflow
 */

type SendNotificationWorkflowProps = {
  notificationSharedData: NotificationSharedData;
  notificationTemplateData: NotificationTemplateData;
  notificationType: NotificationTemplate["notificationType"];
};

export const sendNotificationWorkflow = async ({
  notificationSharedData: { schedule, ...notificationSharedData },
  notificationTemplateData: { workflowId, ...notificationTemplateData },
  notificationType,
}: SendNotificationWorkflowProps) => {
  await startNotificationWorkflow({
    workflowId,
    workflowArgs: [
      {
        schedule,
        notificationData: {
          ...notificationSharedData,
          ...notificationTemplateData,
        },
      },
    ],
  });

  return {
    message: "Notification Workflow started from sendNotification",
    template: notificationType,
  };
};
