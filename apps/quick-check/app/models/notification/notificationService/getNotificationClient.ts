import { getNotificationClient as _getNotificationClient } from "@salesperformanceint/notification-service-js"

import { TEMPORAL_ADDRESS, TEMPORAL_CRT, TEMPORAL_KEY, TEMPORAL_NAMESPACE } from "~/utils/envs.server"

/**
 * Notification Client
 */

export const getNotificationClient = async () => {
  const crt = Buffer.from(TEMPORAL_CRT, "base64")
  const key = Buffer.from(TEMPORAL_KEY, "base64")

  const notificationClient = await _getNotificationClient({
    certificates: { crt, key },
    address: TEMPORAL_ADDRESS,
    namespace: TEMPORAL_NAMESPACE,
  })

  return notificationClient
}
