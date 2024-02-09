import { PostHog } from "posthog-node";

import { POSTHOG_HOST, POSTHOG_KEY } from "./envs.server";

export const posthog = new PostHog(POSTHOG_KEY, { host: POSTHOG_HOST });
