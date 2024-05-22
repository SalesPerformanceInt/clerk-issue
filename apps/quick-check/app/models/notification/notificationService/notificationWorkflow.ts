import type {
  NotificationWorkflowProps,
  Schedule,
  StartWorkflow,
} from "@salesperformanceint/notification-service-js";

import { QC_ENV } from "~/utils/envs.server";

import { getNotificationClient } from "./getNotificationClient";
import type { WorkflowID } from "./notification.types";

/**
 * Start Notification Workflow
 */

type StartNotificationWorkflowProps = Omit<
  StartWorkflow<"notificationWorkflow">,
  "workflow" | "workflowId"
> & {
  workflowId: WorkflowID;
};

export const startNotificationWorkflow = async ({
  workflowId,
  workflowArgs,
  taskQueue,
}: StartNotificationWorkflowProps) => {
  const notificationClient = await getNotificationClient();

  const notificationHandle = await notificationClient.startWorkflow({
    workflow: "notificationWorkflow",
    workflowId: `${workflowId.name}-${workflowId.id}`,
    workflowArgs,
    taskQueue:
      taskQueue ??
      (QC_ENV === "development"
        ? "localNotification"
        : "accelerate_notification_service"),
  });

  return notificationHandle;
};

export const getNotificationHandle = async ({ id, name }: WorkflowID) => {
  const notificationClient = await getNotificationClient();

  const notificationHandle = await notificationClient.getWorkflowHandle({
    workflowId: `${name}-${id}`,
  });

  return notificationHandle;
};

export type { NotificationWorkflowProps, Schedule };
