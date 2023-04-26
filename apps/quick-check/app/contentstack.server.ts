import { ContentStackSDKClient } from "accelerate-learner-ui";

import {
  CS_API_KEY,
  CS_DELIVERY_TOKEN,
  CS_ENV,
} from "~/utils/server/envs.server";

export const contentStack = new ContentStackSDKClient(
  CS_DELIVERY_TOKEN,
  CS_API_KEY,
  CS_ENV,
);
