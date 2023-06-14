import { ContentStackSDKClient } from "accelerate-learner-ui";

import {
  QC_CONTENTSTACK_DELIVERY_TOKEN,
  QC_CONTENTSTACK_ENVIRONMENT,
  QC_CONTENTSTACK_STACK_KEY,
} from "~/utils/envs.server";

export const contentStack = new ContentStackSDKClient(
  QC_CONTENTSTACK_DELIVERY_TOKEN,
  QC_CONTENTSTACK_STACK_KEY,
  QC_CONTENTSTACK_ENVIRONMENT,
);
