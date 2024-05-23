import type {
  NotificationWorkflowProps,
  Schedule,
  StartWorkflow,
} from "@salesperformanceint/notification-service-js";

import { QC_ENV } from "~/utils/envs.server";

import { getNotificationClient } from "./getNotificationClient";
import type { WorkflowID } from "./notification.types";

/**
 * Workflow ID
 */

const getWorkflowId = ({ name, id }: WorkflowID) => `${name}-${id}`;

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
    workflowId: getWorkflowId(workflowId),
    workflowArgs,
    taskQueue:
      taskQueue ??
      (QC_ENV === "development"
        ? "localNotification"
        : "accelerate_notification_service"),
  });

  return notificationHandle;
};

export const getNotificationHandle = async (workflowId: WorkflowID) => {
  const notificationClient = await getNotificationClient();

  const notificationHandle = await notificationClient.getWorkflowHandle({
    workflowId: getWorkflowId(workflowId),
  });

  return notificationHandle;
};

export type { NotificationWorkflowProps, Schedule };
