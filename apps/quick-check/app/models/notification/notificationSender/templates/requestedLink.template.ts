import {
  type NotificationTemplateProps,
  type NotificationTemplateReturn,
} from "../utils/notificationData";

/**
 * Requested Link Notification Template
 */

export type RequestedLinkTemplateProps = {
  notificationType: "RequestedLink";
};

type RequestedLinkTemplate = (
  props: RequestedLinkTemplateProps & NotificationTemplateProps,
) => Promise<NotificationTemplateReturn>;

export const requestedLinkTemplate: RequestedLinkTemplate = async ({
  user,
}) => {
  return {
    workflowId: { name: "RequestedLink", id: user.user_id },
    notificationType: "RequestedLink",
  };
};
