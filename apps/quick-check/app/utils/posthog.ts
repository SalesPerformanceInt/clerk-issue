import { logError } from "~qcs/index";
import { PostHog } from "posthog-node";

import { POSTHOG_HOST, POSTHOG_KEY } from "./envs.server";

export const posthog = new PostHog(POSTHOG_KEY, { host: POSTHOG_HOST });

export const capturePosthogEvent: PostHog["capture"] = async (eventMessage) => {
  try {
    posthog.capture(eventMessage);
    await posthog.flushAsync();
  } catch (error) {
    logError({ error, log: `capturePosthogEvent - ${eventMessage.event}` });
  }
};

export const capturePosthogEvents = async (
  eventMessages: Parameters<PostHog["capture"]>[0][],
) => {
  try {
    for (const eventMessage of eventMessages) {
      posthog.capture(eventMessage);
    }
    await posthog.flushAsync();
  } catch (error) {
    logError({
      error,
      log: `capturePosthogEvents - ${eventMessages[0]?.event}`,
    });
  }
};
