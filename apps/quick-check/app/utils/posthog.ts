import { logError } from "~qcs/index"
import { PostHog } from "posthog-node"

import { POSTHOG_HOST, POSTHOG_KEY } from "./envs.server"

export const posthog = new PostHog(POSTHOG_KEY, { host: POSTHOG_HOST })

// Type not directly exported from posthog-node
type EventMessage = Parameters<PostHog["capture"]>[0]

export const capturePosthogEvent = async (eventMessage: EventMessage) => {
  try {
    posthog.capture(eventMessage)
    await posthog.flushAsync()
  } catch (error) {
    logError({ error, log: `capturePosthogEvent - ${eventMessage.event}` })
  }
}

export const capturePosthogEvents = async (eventMessages: EventMessage[]) => {
  try {
    for (const eventMessage of eventMessages) {
      posthog.capture(eventMessage)
    }
    await posthog.flushAsync()
  } catch (error) {
    logError({
      error,
      log: `capturePosthogEvents - ${eventMessages[0]?.event}`,
    })
  }
}
