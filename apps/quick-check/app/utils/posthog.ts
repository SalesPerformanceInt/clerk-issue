import { logError } from "~qcs/index";
import { PostHog } from "posthog-node";

import { POSTHOG_HOST, POSTHOG_KEY } from "./envs.server";

export const posthog = new PostHog(POSTHOG_KEY, { host: POSTHOG_HOST });

export const caputrePosthogEvent: PostHog["capture"] = async (eventMessage) => {
  try {
    posthog.capture(eventMessage);
    await posthog.flushAsync();
  } catch (error) {
    logError({ error, log: `caputrePosthogEvent - ${eventMessage.event}` });
  }
};

export const caputrePosthogEvents = async (
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
      log: `caputrePosthogEvents - ${eventMessages[0]?.event}`,
    });
  }
};
